(function()
{
    /**
     * This hash map is used for mapping default day count to priorities. The hash index
     * is a identifier of a priority (according to redmine database) and the value is default days
     * number for the priority.
     */
    var prioritiesDue = {
      "3": 180,
      "4": 30,
      "5": 7,
      "6": 3,
      "7": 1,
      "17": 1
    };

    function onPriorityChange(event) {
        var prev = $(this).data("prev");
        var curr = $(this).val();
        console.log("prev is " + prev);
        console.log("curr is " + curr);
        var shift = prioritiesDue[curr] - prioritiesDue[prev];
        var oldDate = new Date($("input#issue_due_date").val());
        if (oldDate == "Invalid Date") {
            oldDate = new Date();
        }

        setDueDate(oldDate, shift);
        recordPreviousPriority.call(this);
    }

    function recordPreviousPriority() {
        console.log("prev = " + $(this).val());
        $(this).data("prev", $(this).val())
    }

    function paddy(n, p) {
        var pad = new Array(1 + p).join('0');
        return (pad + n).slice(-pad.length);
    }

    function setDueDate(date, shift) {
        date.setDate(date.getDate() + shift);
        $("input#issue_due_date").val(
            date.getFullYear() + "-" +
            paddy(date.getMonth() + 1, 2) + "-" +
            paddy(date.getDate(), 2)
        );
    }

    $(document).ready(function() {
        var priority_selector = $("select#issue_priority_id");

        if ($("input#issue_due_date").val() == "") {
            var shift = prioritiesDue[priority_selector.val()];
            if (shift != undefined) {
                setDueDate(new Date(), shift);
            }
        }
        priority_selector.on("focus", recordPreviousPriority);
        priority_selector.on("change", onPriorityChange);
    });
})();
