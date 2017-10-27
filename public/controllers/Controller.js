'use strict';

class Controller {

    constructor(opt) {
        this.userService = opt.userService;
        this.page = opt.page;                   // объект CreatePage
        this.page_parts = opt.page.getParts();  // map() вьюх
    }

    /**
     * Инициализация параметров view (выполняется сразу после создания)
     * Необходимо перепределять
     * @param {Object} [options={}] - Объект с параметрами
     */
    init(options = {}) {
        this.setAttrs(options.attrs);
    }

    /**
     * Вызывается при начале или продолжении работы view (после того, как view была скрыта)
     * Необходимо переопределять своей логикой
     * @param {Object} [options={}] - Объект с параметрами
     */
    resume() {
        this.show();
    }

    /**
     * Показывает view
     * @param {Object} [options={}] - Объект с параметрами
     */
    show() {
        this._el.style.display = 'block';
    }

    /**
     * Скрывает view
     * @param {Object} [options={}] - Объект с параметрами
     */
    hide() {
        this._el.style.display = 'none';
    }



    /**
     * Вставляет текущую view в переданный элемент
     * @param {HTMLElement} el - HTML-элемент, к которому добавляется элемент текущей view
     */
    appendTo(el) {
        el.appendChild(this._el);
    }

    /**
     * Удаляет элемент текущей view
     */
    remove() {
        this._el && this._el.remove();
    }

    /**
     * Заменяет элемент текущей view
     * @param {HTMLElement} el - HTML-элемент, который становится элементом текущей view
     */
    setElement(el) {
        this._el && this._el.remove();
        this._el = el;
    }

    /**
     * Устанавливает текущей view набор атрибутов
     * @param {Object} [attrs={}] - Объект с атрибутами, которые будут установлены у текущего элемента view
     */
    setAttrs(attrs = {}) {
        Object.keys(attrs).forEach((name) => {
            this._el.setAttribute(name, attrs[name]);
        });
    }

    /**
     * Возвращает строку, содержашую текстовое представление текущей view
     * @returns {string}
     */
    toString() {
        return this._el.outerHTML;
    }

    /**
     * Устанавливает текущей view роутер
     * @param {Router} router - инстанс роутера
     */
    setRouterController(router) {
        this._router = router;
    }
}

export default Controller;

