var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var pug = require('gulp-pug');

var paths = {
    public: './public',
    scss: './src/styles.scss',
    pug: './src/views/*.pug'
};

gulp.task('compile:scss', function () {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.public));
});

gulp.task('pages', function buildHTML() {
    return gulp.src(paths.pug)
        .pipe(pug({
            pretty: true,
            verbose: true,
            locals: {
                categories: [
                    {
                        image: '/images/category-pictures/1.png',
                        title: 'Погонажная продукция',
                        keywords: 'Вагонка штиль; Евровагонка; Фальш-брус Блок-хаус; Палубная и террасная доска; Финишный погонаж',
                        sub: [{
                                title: 'Вагонка штиль',
                                active: false
                            },
                            {
                                title: 'Евровагонка',
                                active: true
                            },
                            {
                                title: 'Палубная и террасная доска',
                                active: false
                            },
                            {
                                title: 'Фальш-брус',
                                active: false
                            },
                            {
                                title: 'Блок-хаус',
                                active: false
                            },
                            {
                                title: 'Шкунт',
                                active: false
                            },
                            {
                                title: 'Полог для бань',
                                active: false
                            },
                            {
                                title: 'Финишный погонаж',
                                active: false
                            }
                        ]
                    },
                    {
                        image: '/images/category-pictures/2.png',
                        title: 'Пиломатериал',
                        keywords: 'Сухой пиломатериал; <br/> Пиломатериал естесственной влажности;'
                    },
                    {
                        image: '/images/category-pictures/3.png',
                        title: 'Материалы для обработки',
                        keywords: 'Масла; Антисептик;<br/> Лаки; Краски; '
                    },
                    {
                        image: '/images/category-pictures/4.png',
                        title: 'Лестницы, OSB, утеплители',
                        keywords: 'Комплектующие для лестниц;<br/> Утеплители; ОСБ; Фанера;'
                    },
                    {
                        image: '/images/category-pictures/5.png',
                        title: 'Изделия для бань и саун',
                        keywords: 'Двери; Лавки: Ручки;<br> Столы; Форточки;'
                    },
                    {
                        image: '/images/category-pictures/6.png',
                        title: 'Сопутствующий товар',
                        keywords: 'Саморезы; Пена;<br> Огнебиозащита; Гвозди;'
                    }
                ],
                'header-pages': [
                    {
                        title: 'О нас'
                    },
                    {
                        title: 'Акции'
                    },
                    {
                        title: 'Каталог',
                        active: true
                    },
                    {
                        title: 'Скачать прайс-лист'
                    },
                    {
                        title: 'Контакты'
                    },
                ],
                'category-menu-items': [
                    {
                        title: 'Погонажная продукция'
                    },
                    {
                        title: 'Пиломатериалы'
                    },
                    {
                        title: 'Утеплитель ОСБ, фанера'
                    },
                    {
                        title: 'Материалы для обработки'
                    },
                    {
                        title: 'Сопутствующие товары'
                    },
                    {
                        title: 'Изделия для бань и саун'
                    },
                ]
            }
        }))
        .pipe(
            gulp.dest(paths.public)
        );
});

// watch tasks
var watchDelay = 2000;

gulp.task('watch-styles', function () {
    return gulp.watch('./src/**/*.scss', {
        delay: watchDelay
    }, gulp.series('compile:scss'));
});
gulp.task('watch-pug', function () {
    return gulp.watch('./src/views/**/*.pug', {
        delay: watchDelay
    }, gulp.series('pages'));
});
gulp.task('watch', gulp.parallel(['watch-styles', 'watch-pug']));