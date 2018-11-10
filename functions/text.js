const lib = require('lib');
const acccountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(acccountSid, authToken);

module.exports = async (context) => {
   let text = context["params"].Body;
   let sender = context["params"].From;
   let result = "Failed...";


   if(text.includes("translate")){
        result = await translate(text)
   }

   await client.messages.create({
       to: sender,
       from: '+14318004137',
       body: result
   }).then(msg => console.log(msg.sid))
};

async function translate(text) {
    translateResult = "";

  // Instantiates a client
  const translate = new Translate({
    projectId: process.env.GOOGLE_PROJECT_ID
  });
  let rawdata = fs.readFileSync("../languageCode.json");
  let languages = JSON.parse(rawdata);
  for (var i = 0; i < languages.length; i++) {
    if (languageTo.toLowerCase() === languages[i]["name"].toLowerCase()) {
      var langCode = languages[i]["code"];
    }
  }

  return await new Promise((resolve, reject) => {
    translate
      .translate(stringToTranslate, langCode)
      .then(results => {
        const translation = results[0];
        console.log(`Text: ${stringToTranslate}`);
        console.log(`Translation: ${translation}`);
        resolve(translation);
      })
      .catch(err => {
        console.error("ERROR:", err);
      });
  });

}
