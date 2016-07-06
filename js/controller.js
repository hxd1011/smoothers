let controller = function(canvas, smoother_ui, parameter_ui) {

    return {

        /* Start the event loop, listening for messages from the various ui
         * elements.
         */
        run: function() {
            let that = this;
            window.setInterval(function() {
                if(canvas.msg_queue.length > 0) {
                    msg = canvas.msg_queue.pop();
                    that.field_canvas_msg(msg);
                }
                if(smoother_ui.msg_queue.length > 0) {
                    msg = smoother_ui.msg_queue.pop();
                    that.field_smoother_ui_msg(msg);
                }
                if(parameter_ui.msg_queue.length > 0) {
                    msg = parameter_ui.msg_queue.pop();
                    that.field_parameter_ui_msg(msg);
                }
            });
        },

        field_canvas_msg: function(msg) {
            let smoother_name = smoother_ui.get_selected_smoother(); 
            let smoother = smoothers[smoother_name];
            let parameters = parameter_ui.get_selected_parameters();
            canvas.smooth(smoother, parameters);
        },

        field_smoother_ui_msg: function(msg) {
            let smoother_name = smoother_ui.get_selected_smoother();
            let smoother = smoothers[smoother_name];
            parameter_ui.clear();
            parameter_ui.add_parameters(smoother.parameters);
            let parameters = parameter_ui.get_selected_parameters();
            canvas.smooth(smoother, parameters);
        },

        field_parameter_ui_msg: function(msg) {
            let smoother_name = smoother_ui.get_selected_smoother(); 
            let smoother = smoothers[smoother_name];
            let parameters = parameter_ui.get_selected_parameters();
            canvas.smooth(smoother, parameters);
        },

    }

}
