import mongoose from "mongoose";

const teamBroadcasterSchema = new mongoose.Schema(
  {
    teamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: [true, "Team is required"],
    },

    broadcasterId: {
      type: moongose.Schema.Types.ObjectId,
      ref: "Broadcaster",
      required: [true, "Broadcaster is required"],
    },
  },
  { timestamps: true },
);

//prevent duplicate team-broadcaster combinations
teamBroadcasterSchema.index({ teamId: 1, sponsorId: 1 }, { unique: true });

export default moongose.model("TeamBroadcaster", teamBroadcasterSchema);
