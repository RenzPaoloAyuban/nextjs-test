import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
<<<<<<< HEAD
<<<<<<< HEAD
        type: Schema.Types.ObjectId,
=======
        type: mongoose.Schema.Types.ObjectId,
>>>>>>> f314546 (created Forms and its api)
=======
        type: Schema.Types.ObjectId,
>>>>>>> 1edbc47 (almost finished, search bar completed)
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.']
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;