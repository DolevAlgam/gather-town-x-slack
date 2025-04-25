import { Member } from "./types";
import * as dotenv from "dotenv";

dotenv.config();

const MEMBERS: Member[] = [
  {
    name: "Dolev",
    slackId: "U08JS603NJW",
    gatherId: "iSxP75BV40SGGTfUWB6fqmTfDy02",
  },
  {
    name: "Daniel",
    slackId: "U08NA2N9ZPG",
    gatherId: "Y9UPZyUX88YDTlQsAGckF6df8Rm1",
  }
];

const {
  GATHER_MAP_ID,
  GATHER_SPACE_ID,
  GATHER_API_KEY,
  GATHER_BOT_ID,
  SLACK_APP_TOKEN,
  SLACK_SIGNING_SECRET,
  SLACK_BOT_TOKEN,
  SLACK_PORT,
  SLACK_CHAT_CHANNEL_ID,
  SLACK_PRESENCE_CHANNEL_ID,
  GATHER_DOORBELL_OBJ_ID
} = process.env;

export default {
  members: MEMBERS,
  slack: {
    presenceChannelId: SLACK_PRESENCE_CHANNEL_ID,
    chatChannelId: SLACK_CHAT_CHANNEL_ID,
    port: SLACK_PORT ?? 3000,
    appOptions: {
      token: SLACK_BOT_TOKEN,
      signingSecret: SLACK_SIGNING_SECRET,
      socketMode: true,
      appToken: SLACK_APP_TOKEN,
    },
  },
  gather: {
    apiKey: GATHER_API_KEY,
    spaceId: GATHER_SPACE_ID,
    mapId: GATHER_MAP_ID,
    botId: GATHER_BOT_ID,
    doorBellId: GATHER_DOORBELL_OBJ_ID,
  },
};
