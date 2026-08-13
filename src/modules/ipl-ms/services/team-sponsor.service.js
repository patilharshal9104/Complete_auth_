import ApiError from "../../../common/utils/api-error";
import Team from "../models/team.model.js";
import Sponsor from "../models/sponsor.model.js";
import TeamSponsor from "../models/team-sponsor.model.js";

const attachSponsor = async ({ teamId, sponsorId }) => {
  const team = await Team.findById(teamId);
  if (!team) {
    throw ApiError.notfound("Not found");
  }
  const sponsor = await Sponsor.findById(sponsorId);
  if (!sponsor) throw ApiError.notfound("Not found");
  const existing = await TeamSponsor.findOne({ teamId, sponsorId });
  if (existing)
    throw ApiError.conflict("sponsor already attached to this team");
  const teamSponsor = await TeamSponsor.create({ teamId, sponsorId });
  return teamSponsor;
};
