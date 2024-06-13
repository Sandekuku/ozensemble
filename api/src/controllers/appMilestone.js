const express = require("express");
const { catchErrors } = require("../middlewares/errors");
const router = express.Router();
const prisma = require("../prisma");
const dayjs = require("dayjs");
const { superUser30DaysInAppModal, superUser90DaysInAppModal } = require("../utils/inAppModals");

router.post(
  "/",
  catchErrors(async (req, res) => {
    const { matomoId, appMilestone } = req.body || {};

    if (!matomoId) return res.status(400).json({ ok: false, error: "no matomo id" });

    const user = await prisma.user.upsert({
      where: { matomo_id: matomoId },
      create: {
        matomo_id: matomoId,
        created_from: "AppMilestonePost",
      },
      update: {},
    });

    await prisma.appMilestone.upsert({
      where: { id: `${user.id}_${appMilestone}` },
      update: {
        userId: user.id,
        date: dayjs().format("YYYY-MM-DD"),
      },
      create: {
        id: `${user.id}_${appMilestone}`,
        userId: user.id,
        date: dayjs().format("YYYY-MM-DD"),
      },
    });

    return res.status(200).send({ ok: true });
  })
);

router.post(
  "/init",
  catchErrors(async (req, res) => {
    const { matomoId, isRegistered } = req.body || {};
    if (!matomoId) return res.status(400).json({ ok: false, error: "no matomo id" });
    const user = await prisma.user.upsert({
      where: { matomo_id: matomoId },
      create: {
        matomo_id: matomoId,
        created_from: "AppMilestoneInit",
      },
      update: {},
    });

    if (req.headers.appversion < 243) return res.status(200).send({ ok: true });

    if (req.headers.appversion >= 280) {
      const featureMotivation = await prisma.appMilestone.findUnique({
        where: { id: `${user.id}_@Motivation` },
      });
      if (!featureMotivation) {
        await prisma.appMilestone.create({
          data: {
            id: `${user.id}_@Motivation`,
            userId: user.id,
            date: dayjs().format("YYYY-MM-DD"),
          },
        });
        return res.status(200).send({
          ok: true,
          showInAppModal: {
            id: "@Motivation",
            title: "Craving: consultez des pensées motivantes",
            content:
              "Accédez à une page de pensées motivantes depuis votre espace “Craving”.\n\n Un moyen supplémentaire pour vous accompagner lors d’un moment de craving",
            CTATitle: "Découvrir",
            CTAEvent: {
              category: "MOTIVATION",
              action: "PRESSED_FROM_NEW_FEATURE_MODAL",
              name: "FROM_NEW_FEATURE",
            },
            CTAOnPress: "goToCraving",
            CTANavigation: ["CRAVING"],
          },
        });
      }
    }

    if (req.headers.appversion >= 272) {
      const featureCraving = await prisma.appMilestone.findUnique({
        where: { id: `${user.id}_@CravingStrategy` },
      });
      if (!featureCraving) {
        await prisma.appMilestone.create({
          data: {
            id: `${user.id}_@CravingStrategy`,
            userId: user.id,
            date: dayjs().format("YYYY-MM-DD"),
          },
        });
        return res.status(200).send({
          ok: true,
          showInAppModal: {
            id: "@CravingStrategy",
            title: "Craving: définissez une stratégie pour surmonter chaque craving",
            content:
              "Pour chaque stratégie, définissez votre ressenti, l’elément déclencheur de votre craving, son intensité et le plan d’action que vous souhaitez mettre en place.\n\nRetrouvez toutes vos stratégies dans une page dédiée.",
            CTATitle: "Découvrir",
            CTANavigation: ["CRAVING"],
            CTAOnPress: "goToCraving",
            CTAEvent: {
              category: "CRAVING",
              action: "PRESSED_FROM_NEW_FEATURE_STRATEGY_MODAL",
              name: "FROM_NEW_FEATURE_STRATEGY",
            },
          },
        });
      }
    }

    const allowNotification = await prisma.appMilestone.findUnique({
      where: { id: `${user.id}_@AllowNotification` },
    });

    const showActivateNotifs =
      !isRegistered.granted &&
      ((!allowNotification && user.lastConsoAdded) || (allowNotification && dayjs(allowNotification.createdAt).isBefore(dayjs().subtract(7, "day"))));

    if (showActivateNotifs) {
      const milestoneId = allowNotification ? "@AllowNotificationSecondTime" : "@AllowNotification";
      const title = "Activer les notifications ?";
      const onPress = isRegistered.canAsk ? "allowNotification" : "openSettings";
      const allowNotificationSecondTime = await prisma.appMilestone.findUnique({
        where: { id: `${user.id}_@AllowNotificationSecondTime` },
      });
      if (!allowNotificationSecondTime) {
        await prisma.appMilestone.create({
          data: {
            id: `${user.id}_${milestoneId}`,
            userId: user.id,
            date: dayjs().format("YYYY-MM-DD"),
          },
        });

        return res.status(200).send({
          ok: true,
          showInAppModal: {
            id: milestoneId,
            title: title,
            content: "Activez les notifications vous aidera à vous rappeler d’ajouter vos consommations tous les jours ou chaque semaine",
            CTATitle: isRegistered.canAsk ? "Activer les notifications ?" : "Aller dans les réglages",
            secondaryButtonTitle: "non merci",
            CTAEvent: {
              category: "ALLOW_NOTIFICATION" + (allowNotification ? "_SECOND_TIME" : ""),
              action: "PRESSED_FROM_NEW_FEATURE_MODAL",
              name: "FROM_NEW_FEATURE",
            },
            CTAOnPress: onPress,
          },
        });
      }
    }

    // USER SURVEY:
    if (user.createdAt && dayjs(user.createdAt).isBefore(dayjs().subtract(90, "day"))) {
      const super90UserFeature = await prisma.appMilestone.findUnique({
        where: { id: `${user.id}_@Super90UserFeature` },
      });
      if (!super90UserFeature) {
        await prisma.appMilestone.create({
          data: {
            id: `${user.id}_@Super90UserFeature`,
            userId: user.id,
            date: dayjs().format("YYYY-MM-DD"),
          },
        });
        return res.status(200).send({
          ok: true,
          showInAppModal: superUser90DaysInAppModal,
        });
      }
    }

    if (user.createdAt && dayjs(user.createdAt).isBefore(dayjs().subtract(30, "day"))) {
      // if the user skipped the 30 days, he will have got the 90 days - if he got the 90 days, we don't show him the 30 days
      const super90UserFeature = await prisma.appMilestone.findUnique({
        where: { id: `${user.id}_@Super90UserFeature` },
      });
      if (!super90UserFeature) {
        const super30UserFeature = await prisma.appMilestone.findUnique({
          where: { id: `${user.id}_@Super30UserFeature` },
        });
        if (!super30UserFeature) {
          await prisma.appMilestone.create({
            data: {
              id: `${user.id}_@Super30UserFeature`,
              userId: user.id,
              date: dayjs().format("YYYY-MM-DD"),
            },
          });
          return res.status(200).send({
            ok: true,
            showInAppModal: superUser30DaysInAppModal,
          });
        }
      }
    }

    return res.status(200).send({ ok: true });
  })
);

module.exports = router;
