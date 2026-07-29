import mongoose from "mongoose";

const { Schema } = mongoose;
const MovieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100,
      unique: true,
    },

    description: {
      type: String,
      required: true,
      maxlength: 500,
    },

    image: {
      type: String,
      required: true,
      trim: true,
    },

    genre: {
      type: String,
      required: true,
      enum: [
        "ACTION",
        "COMEDY",
        "DRAMA",
        "SCI-FI",
        "HORROR",
        "ROMANTIC",
        "DOCUMENTARY",
        "ADVENTURE",
      ],
    },

    duration: {
      type: String,
      required: true,
      min: 1,
    },

    releaseYear: {
      type: Number,
      required: true,
      max: new Date().getFullYear() + 1,
      min: 2000,
    },

    rating: {
      type: String,
      required: true,
      enum: ["G", "PG"],
    },

    videoUrl: {
      type: String,
      required: true,
    },

    trailerUrl: {
      type: String,
      required: true,
      unique: true,
    },

    cast: [
      {
        type: String,
        required: true,
      },
    ],
    director: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      required: true,
    },

    isAvailable: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamp: true },
);
export default mongoose.model("Movie", MovieSchema);
