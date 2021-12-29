module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AKIAQAHIO7PFJBPDF2GS"),
        secretAccessKey: env("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"),
        region: env("ap-northeast-2"),
        params: {
          Bucket: env("tinyfilm-image"),
        },
      },
    },
  },
});
