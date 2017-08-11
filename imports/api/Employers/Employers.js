/* eslint-disable consistent-return */

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Employers = new Mongo.Collection('Employers');

Employers.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Employers.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Employers.schema = new SimpleSchema({
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
  Description: {
    type: String,
    label: 'The company description',
  },
  logo_url: {
    type: String,
    label: 'The logo url',
  },
  user_id: {
    type: String,
    label: 'The body of the document.',
  },
});


Employers.attachSchema(Employers.schema);

export default Employers;
