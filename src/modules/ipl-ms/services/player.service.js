import ApiError from "../../../common/utils/api-error";
import Team from "../models/team.model.js";
import Player from "../models/player.model.js";
//create read update delete make it own

const transferPlayer = async (playerId, newteamId) => {
  const team = await Team.findById(newteamId);
  if (!team) {
    throw ApiError.notfound("not found team");
  }
  const player = await Player.findByIdAndUpdate(
    playerId,
    { teamId: newteamId },
    { new: true, runValidators: true },
  ).populate("teamId", "name");
  if (!player) {
    throw ApiError.notfound("not found");
  }
  return player;
};

const updatePlayerRole = async (playerId, role) => {
  const player = await Player.findByIdAndUpdate(
    playerId,
    { role },
    { new: true, runValidators: true },
  ).populate("teamId", "name");

  if (!player) {
    throw ApiError.notfound("player not found");
  }
  return player;
};

export { transferPlayer, updatePlayerRole };
