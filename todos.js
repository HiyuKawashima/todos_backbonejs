jQuery(function () {
        
    const EVENT_SUBMITTED = 'submitted'

    const MainView = Backbone.View.extend({
        initialize: function () {
            // create models and collections
            this.taskCollection = new TaskCollection()
        
            // create sub views
            this.TaskInputView = new TaskInputView()
            this.TaskListView = new TaskListView({collection: this.taskCollection})
            this.TaskFooterView = new TaskFooterView();
        
            // set event handlers
            this.TaskInputView.on(EVENT_SUBMITTED, function (value) {
            alert($('#input').val())
            const model = new TaskModel({
                name: value
            })
            this.taskCollection.add(model)
            })
        },
    })

    const TaskInputView = Backbone.View.extend({
        el : '#input',

        events:{
            'keydown': 'onSubmitted',
        },

        onSubmitted: function (e) {
            if (e.which === 13){
                this.trigger(EVENT_SUBMITTED ,$('#input').val())
            }
        },

    })

    const _taskInputView = new TaskInputView() 

    const TaskListView = Backbone.View.extend({


    })

    const TaskFooterView = Backbone.View.extend({


    })

    const TaskModel = Backbone.Model.extend({
        defaults : {
            name : '', // タスク名
        },
    })

    // collection and model
    const TaskCollection = Backbone.Collection.extend({ 
        model: TaskModel,
    })

    const mainView = new MainView()
});