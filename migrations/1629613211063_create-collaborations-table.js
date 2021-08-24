/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  // buat tabel collab
  pgm.createTable('collaborations', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    note_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  // constraint unique
  pgm.addConstraint('collaborations', 'unique_user_id_and_note_id', 'UNIQUE(note_id, user_id)');

  // constraint foreign key
  pgm.addConstraint('collaborations', 'fk_collaborations.note_id_notes.id', 'FOREIGN KEY(note_id) REFERENCES notes(id) ON DELETE CASCADE');
  pgm.addConstraint('collaborations', 'fk_collaborations.user_id_users.id', 'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  // hapus collab
  pgm.dropTable('collaborations');
};
