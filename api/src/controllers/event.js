const express = require("express");
const { catchErrors } = require("../middlewares/errors");
const { capture } = require("../third-parties/sentry");
const router = express.Router();
// const inappMessages = require("../in-app-messages");
const newFeatures = require("../new-features");

router.post(
  "/",
  catchErrors(async (req, res) => {
    const { body } = req;
    req.user = { userId: req.body.userId }; // for log in sentry

    // old versions
    const sendNPSEvent = body.event?.category === "NPS";
    const exportDataEvent = body.event?.action === "EXPORT";
    if (req.headers.appversion < 99 && (exportDataEvent || sendNPSEvent)) {
      return res.status(200).send({
        ok: true,
        sendInApp: [
          "L'envoi d'email n'est plus disponible sur cette version d'application",
          "Mettez à jour votre application !",
          [
            {
              text: "Mettre à jour",
              link:
                req.headers.appdevice === "ios"
                  ? "https://apps.apple.com/us/app/oz-ensemble/id1498190343?ls=1"
                  : "https://play.google.com/store/apps/details?id=com.addicto",
            },
            { text: "Plus tard", style: "cancel" },
          ],
          { cancelable: true },
        ],
      });
    }

    // test release in build 124 : new send in-app message
    if (req.headers.appversion >= 124) {
      if (body.event.category === "NAVIGATION" && body.event.action === "GAINS_MAIN_VIEW")
        return res.status(200).send({ ok: true, newFeatures: [newFeatures.gains] });
      if (body.event.category === "NAVIGATION" && body.event.action === "DEFIS_MENU")
        return res.status(200).send({ ok: true, newFeatures: [newFeatures.defis] });
      if (body.event.category === "NAVIGATION" && body.event.action === "CONSO_FOLLOW_UP")
        return res.status(200).send({ ok: true, newFeatures: [newFeatures.suivi] });
      if (body.event.category === "NAVIGATION" && body.event.action === "HEALTH")
        return res.status(200).send({ ok: true, newFeatures: [newFeatures.articles] });

      // default : show new-gains (default page on startup)
      return res.status(200).send({ ok: true, newFeatures: [newFeatures["gains"]] });
    }

    if (body.event.category === "APP" && body.event.action === "APP_OPEN") {
      await new Promise((res) => setTimeout(res, 1000)); // maybe better for showing up on time
      return res.status(200).send({ ok: true, newFeatures: [newFeatures["new-defis"], newFeatures["new-articles"]] });
    }
  })
);

module.exports = router;
