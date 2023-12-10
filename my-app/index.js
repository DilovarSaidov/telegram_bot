const TelegramApi = require("node-telegram-bot-api");
const token = "6831743797:AAEzIP5GBy2KE_DZc1UxPuy9lohLFpl87d8";

const bot = new TelegramApi(token, { polling: true });

bot.setMyCommands([
  {
    command: "/start",
    description: "начальное приветствия",
  },
  {
    command: "/info",
    description: "информация о боте",
  },
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (text === "/start") {
    return bot.sendMessage(chatId, "Привет чем  могу помочь?");
  }

  if (text === "/info") {
    return bot.sendMessage(
      chatId,
      "Я помогаю по матетматеки, меня создал Шахбоз"
    );
  }

  if (/^[+\-*/.\d\s]+$/.test(text)) {
    try {
      const result = eval(text);

      return bot.sendMessage(chatId, `Результат: ${result}`);
    } catch (error) {
      return bot.sendMessage(chatId, "Ошибка в выражении.");
    }
  }

  return bot.sendMessage(chatId, "Я вас не понимаю, попробуйте еще раз");
});
