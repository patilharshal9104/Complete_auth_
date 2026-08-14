import ApiError from "../../../common/utils/api-error";
import Team from "../models/team.model.js";
import Broadcaster from "../models/broadcaster.model.js";
import TeamBroadcaster from "../models/team-broadcaster.model.js";

const broadCaster = async ({ teamId }) => {
  const team = await Team.findById(teamId);
  if (!team) {
    throw ApiError.notfound("Not found");
  }
  const sponsor = await Sponsor.findById(sponsorId);
  if (!sponsor) throw ApiError.notfound("Not found");
  const existing = await TeamSponsor.findOne({ teamId });
  if (existing)
    throw ApiError.conflict("broadcaster already attached to this team");
  const broadcaster = await TeamSponsor.create({ teamId, sponsorId });
  return teamSponsor;
};
