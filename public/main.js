'use strict';

import UserService from './services/UserService';
import CreatePage from './views/CreatePage.js';
import Router from './modules/Router';
import MenuStartController from './controllers/MenuStartController';
import PlayGameController from './controllers/PlayGameController';
import SignInController from './controllers/SignInController';
import SignUpController from './controllers/SignUpController';
import ScoreListController from './controllers/ScoreListController';
import AboutUsController from './controllers/AboutUsController';



let userService = new UserService();
let page = new CreatePage();


(new Router())
    .addRoute('/', MenuStartController, {userService: userService, page: page})
    .addRoute('/play', PlayGameController, {userService: userService, page: page})
    .addRoute('/signin', SignInController, {userService: userService, page: page})
    .addRoute('/signup', SignUpController, {userService: userService, page: page})
    .addRoute('/score', ScoreListController, {userService: userService, page: page})
    .addRoute('/about', AboutUsController, {userService: userService, page: page})
    .startRoute();
