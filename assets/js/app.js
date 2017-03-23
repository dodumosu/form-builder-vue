// $(document).foundation()
Vue.component('textfield', {
    template: '<input type="text">'
});

Vue.component('option-item', {
    props: ['option'],
    template: '<option value="{{ option.value }}">{{ option.label }}</option>'
});

Vue.component('selectfield', {
    props: ['options'],
    template: `
        <select>
            <option-item v-for="option in options" v-bind="option"></option-item>
        </select>`
});

Vue.component('textbox', {
    template: '<textarea></textarea>'
});

var TextInput = function (num_fields) {
    this.componentName = 'textfield';
    this.id = num_fields + 1;
}

var Select = function (num_fields) {
    this.componentName = 'selectfield';
    this.id = num_fields + 1;
}

var TextBox = function (num_fields) {
    this.componentName = 'textbox';
    this.id = num_fields + 1;
}

var vm = new Vue({
    el: '#app',
    data: {
        fields: []
    },
    methods: {
        getComponent: function (field) {
            return field.componentName;
        },
        addTextInput: function () {
            this.fields.push(new TextInput(this.fields.length));
        },
        addSelect: function () {
            this.fields.push(new Select(this.fields.length));
        },
        addTextBox: function () {
            this.fields.push(new TextBox(this.fields.length));
        }
    }
});