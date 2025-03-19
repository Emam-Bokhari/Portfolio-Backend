"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = require("mongoose");
const queryFilter_1 = require("../../../utils/moduleSpecific/queryFilter");
const contactSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    message: {
        type: String,
        trim: true,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});
// query middleware for soft delete by utils
contactSchema.pre('find', queryFilter_1.excludeDeletedQuery);
contactSchema.pre('findOne', queryFilter_1.excludeDeletedQuery);
// aggregate middleware for soft delete by utils
contactSchema.pre('aggregate', queryFilter_1.excludeDeletedAggregation);
exports.Contact = (0, mongoose_1.model)('Contact', contactSchema);
