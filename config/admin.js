module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '91966683ba79e6bc1d282714c469dce5'),
  },
});
