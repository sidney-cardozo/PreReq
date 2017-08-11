/* eslint-disable consistent-return */

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Students = new Mongo.Collection('Students');

Students.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Students.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Students.schema = new SimpleSchema({
  jobSeeker: {
    type: String,
    label: 'The ID of the JobSeeker this student belongs to.',
  },
  createdAt: {
    type: String,
    label: 'The date this student was created.',
    autoValue() {
      if (this.isInsert) return (new Date()).toISOString();
    },
  },
  updatedAt: {
    type: String,
    label: 'The date this student was last updated.',
    autoValue() {
      if (this.isInsert || this.isUpdate) return (new Date()).toISOString();
    },
  },
  fullName: {
    type: String,
    label: 'The full name of the student.',
  },
  concentration: {
    type: String,
    label: 'The concentration of the student.',
  },
  industry: {
    type: String,
    label: 'The concentration of the student.',
  },
  resume: {
    type: String,
    label: 'Link to resume of the student.',
  }
});

Students.attachSchema(Students.schema);

export default Students;
