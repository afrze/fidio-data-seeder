import mongoose from "mongoose";

const breakdownAnalysisSchema = new mongoose.Schema(
  {
    TIME_STAMP: {
      type: Date,
      default: Date.now(),
    },
    MACHINE_ID: String,
    REASON: String,
    SHIFT: String,
    FROM_TIME: {
      type: Date,
      default: Date.now(),
    },
    TO_TIME: {
      type: Date,
      default: Date.now(),
    },
    DURATION: Number,
  },
  {
    timestamps: true,
  }
);

const BreakdownAnalysis = mongoose.model('BreakdownAnalysis', breakdownAnalysisSchema)

export default BreakdownAnalysis