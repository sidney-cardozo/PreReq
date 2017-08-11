/* eslint-disable consistent-return */

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Jobs = new Mongo.Collection('Jobs');

Jobs.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Jobs.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Jobs.schema = new SimpleSchema({
  owner: {
    type: Number,
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
  position: {
    type: String,
    label: 'Job position',
  },
  description: {
    type: String,
    label: 'The body of the document.',
  },
  requirements: {
    type: String,
    label: 'Job requirements',
  },
  jobType: {
    type: String,
    label: 'Type of job: Contract, full time, part-time',
  },
  applyInfo: {
    type: String,
    label: 'How to apply for this job',
  },
  tags: {
    type: [String],
    label: 'tags associated to this job',
  },
});

Jobs.attachSchema(Jobs.schema);

export default Jobs;
