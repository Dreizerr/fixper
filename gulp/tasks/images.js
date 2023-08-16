import sharpOptimizeImages from "gulp-sharp-optimize-images";

export const images = () => {
  return app.gulp
    .src(app.path.src.images)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "Images",
          message: "Error <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))
    .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.images)))
    .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.images)))
    .pipe(
      app.plugins.if(
        app.isBuild,
        sharpOptimizeImages({
          webp: {
            quality: 95,
            lossless: false,
          },

          png_to_png: {
            quality: 80,
          },

          jpg_to_jpg: {
            quality: 80,
            mozjpeg: true,
          },
        })
      )
    )

    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};
