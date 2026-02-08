module.exports = {
  config: {
    name: "murgi",
    version: "1.0",
    credis: "BaYjid",
    permission: 2,
    prefix: true,
    premium: false,
    shortDescription: "chodo",
    longDescription: "Gen Z Roast",
    category: "fun",
    guide: {
      bn: "{pn} @mention"
    }
  },

  run: async function ({ api, event, args }) {
    const mention = Object.keys(event.mentions || {})[0];

    if (!mention) {
      return api.sendMessage(
        "ওইদিকে কি এদিকে? ট্যাগ দে, ওরে ইচ্ছা মত চু*দি!🔥",
        event.threadID,
        event.messageID
      );
    }

    const name = event.mentions[mention];

    const roastLines = [
      "খাংকির পোলা তর মারে চুদি ami..!🥰",
      "খানকির পোলা তোর কচি বোনরে আমি চ*দি 🤯🔍",
      "তোর মায়ের ভোদায় আমি মাল ফেলাবো 🎤🤐",
      "তোরে চ*দে ভার্চুয়াল আউট করবো",
      "তোর দুলাভাইয়ের কান্দে ফালাইয়া তোর মারে চ*দি 🧠📴",
      "ডোন্ট মাইন্ড ছোট তর মাইরে আস্তে চোদবো 💥🤡",
      "তোর বেশ্যা মায়ের কালা বোদাই আমি ফালাবো! 🍎🧠",
      "তোর মারে দড়ি দিয়ে বেঁধে চ*দি 📉💥",
      "বায়জিদর পোলা শোন, তোর মারে চ*দতে চ**দতে মেরে ফেলবো 🦠🕵️‍♂️",
      "তোর মার ভোদায় গরুর মাল ফালাবো 🤖🙉",
      "তুই ভার্চুয়াল অনেক বড় কিং তাই না 📲🚫",
      "উফফফ খাদ্দামা মাগির পোলা, তর আম্মুর কালা ভুদায় মাল আউট, এবার কচি বোন রে উপ্তা করে চুদবো 💉🤳🤡",
      "অনলাইনে গালিবাজ হয়ে গেছস মাগির পোলা, এমন চুদা দিমু লাইফটাইম মনে রাখবি, আমি তর বাপ মাগির ছেলে 😘🤷‍♂️🗣️",
      "বাতিজা শুন, তর আম্মু রে চুদলে রাগ করবি না তো? আচ্ছা, রাগ করিস না — তর বোন এর জামা টা খুলে দে ✋",
      "হাই মাদারচোদ, তোর ব্যাশা জাতের আম্মু টা রে আদর করে করে চুদি 📞🐢",
      "চুদা কি আর খাবি মাগির পোল 🤖😵‍💫🪞",
      "খাংকির পোলা 🥰🚫",
      "বান্দি মাগির পোলা, তর আম্মু রে চুদি তর দুলাভাই এর কান্দে ফেলে — Power OF 𝐗𝐀𝐒𝐒 𝐁𝐎𝐓_🤝🤳❌",
      "তর আম্মু রে আচার এর লোভে চুদি মাগির পোলা 🥺🏋️‍♂️",
      "খাংকি মাগির পোলা, কথা কম — তর আম্মু রে চুদে বানামু আইটেম বোম"
    ];

    const roast = roastLines[Math.floor(Math.random() * roastLines.length)];

    return api.sendMessage({
      body: `${name}, ${roast}`,
      mentions: [
        {
          tag: name,
          id: mention
        }
      ]
    }, event.threadID, event.messageID);
  }
};
