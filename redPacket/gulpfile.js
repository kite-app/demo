var gulp = require("gulp"),	
	less = require("gulp-less"),	//编译less
	uglify = require("gulp-uglify"),
	concatCss = require('gulp-concat-css');	//合并CSS
	imagemin = require('gulp-imagemin');
	cssmin = require('gulp-minify-css');
	htmlmin = require('gulp-htmlmin');

//less
gulp.task("less",function(){
	gulp.src("src/assets/less/app.less")
	.pipe(less())
	.pipe(gulp.dest("src/assets/css"))
});

////js压缩
//gulp.task("js-min",function(){
//	gulp.src("app/system_booking/js/*.js")
//	.pipe(uglify())
//	.pipe(gulp.dest("pack/app/system_booking/js"))
//})
//gulp.task("js-app",function(){
//	gulp.src("app/system_booking/js/app/*.js")
//	.pipe(uglify())
//	.pipe(gulp.dest("pack/app/system_booking/js/app"))
//})
//gulp.task("js-lib",function(){
//	gulp.src("app/system_booking/js/lib/*.js")
//	.pipe(uglify())
//	.pipe(gulp.dest("pack/app/system_booking/js/lib"))
//})
////img压缩
//gulp.task('img', function () {
//  gulp.src('app/system_booking/image/*.{png,jpg,gif,ico}')
//      .pipe(imagemin())
//      .pipe(gulp.dest('pack/app/system_booking/image'))
//});
////css压缩
//gulp.task('css', function () {
//  gulp.src('app/system_booking/css/*.css')
//      .pipe(cssmin({
//          advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
//          compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
//          keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
//          keepSpecialComments: '*'
//          //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
//      }))
//      .pipe(gulp.dest('pack/app/system_booking/css'));
//});
////html压缩
//
//gulp.task('mian', function () {
//  var params = {
//      removeComments: true,//清除HTML注释
//      collapseWhitespace: true,//压缩HTML
//      collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
//      removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
//      removeScriptTypeAttributes: false,//删除<script>的type="text/javascript"
//      removeStyleLinkTypeAttributes: false,//删除<style>和<link>的type="text/css"
//      minifyJS: true,//压缩页面JS
//      minifyCSS: true//压缩页面CSS
//  };
//  gulp.src('app/system_booking/*.html')
//      .pipe(htmlmin(params))
//      .pipe(gulp.dest('pack/app/system_booking/'));
//});
//合并CSS
//gulp.task('cssAll', function () {
//return gulp.src('app/system_booking/cssAll/*.css')
//  .pipe(concatCss("login.css"))
//  .pipe(gulp.dest('app/system_booking/css'));
//});

gulp.task('watch', ['less'], function() {
	gulp.watch('src/assets/less/*.less', ['less']);
});
gulp.task("default",["watch"]);
