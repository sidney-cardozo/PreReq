/* eslint-disable consistent-return */

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const JobSeekers = new Mongo.Collection('JobSeekers');

JobSeekers.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

JobSeekers.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

JobSeekers.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'The ID of the user this document belongs to.',
  },
  createdAt: {
    type: String,
    label: 'The date this document was created.',
    autoValue() {
      if (this.isInsert) return (new Date()).toISOString();
    },
  },
  updatedAt: {
    type: String,
    label: 'The date this document was last updated.',
    autoValue() {
      if (this.isInsert || this.isUpdate) return (new Date()).toISOString();
    },
  },
  phone_number: {
    type: SimpleSchema.integer,
    label: 'The user phone number.',
  },
  description: {
    type: String,
    label: 'The description of the person.',
  },
  fields_interest: {
    type: [String],
    label: 'The fields of interest.',
  },
  photo: {
    type: Buffer,
    label: 'The user photo.',
  },
});


JobSeekers.attachSchema(JobSeekers.schema);

export default JobSeekers;
