import webpack from "webpack-stream";

export const js = () => {
  let webpackConf = {
    mode: app.isBuild ? "production" : "development",
    output: {
      filename: "[name].min.js",
    },
  };

  let fileName = null;
  let entryObj = {};
  app.path.src.js.map((filePath) => {
    fileName = filePath.split("/").pop().split(".").slice(0, -1).join(".");
    entryObj[fileName] = filePath;
  });

  webpackConf.entry = entryObj;

  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error <%= error.message %>",
        })
      )
    )
    .pipe(webpack(webpackConf))
    .pipe(app.gulp.dest(app.path.build.js))

    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
