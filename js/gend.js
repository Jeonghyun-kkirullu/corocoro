var chart_895822aabe8348e29fd75a82a4655684 = echarts.init(
    document.getElementById('895822aabe8348e29fd75a82a4655684'), 'white', {renderer: 'canvas'});
var option_895822aabe8348e29fd75a82a4655684 = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"color": [
"cornflowerblue",
"salmon"
],
"series": [
{
    "type": "pie",
    "clockwise": true,
    "data": [
        {
            "name": "\ub0a8",
            "value": 14
        },
        {
            "name": "\uc5ec",
            "value": 10
        }
    ],
    "radius": [
        "0%",
        "75%"
    ],
    "center": [
        "50%",
        "50%"
    ],
    "label": {
        "show": true,
        "position": "top",
        "color": [
            "black"
        ],
        "margin": 8,
        "formatter": "{b}: {d}%"
    },
    "rippleEffect": {
        "show": true,
        "brushType": "stroke",
        "scale": 2.5,
        "period": 4
    }
}
],
"legend": [
{
    "data": [
        "\ub0a8",
        "\uc5ec"
    ],
    "selected": {},
    "show": true,
    "left": "75%",
    "top": "35%",
    "orient": "vertical",
    "padding": 5,
    "itemGap": 10,
    "itemWidth": 25,
    "itemHeight": 14
}
],
"tooltip": {
"show": true,
"trigger": "item",
"triggerOn": "mousemove|click",
"axisPointer": {
    "type": "line"
},
"textStyle": {
    "fontSize": 14
},
"borderWidth": 0
},
"title": [
{
    "text": "\uc131\ubcc4",
    "padding": 5,
    "itemGap": 10
}
]
};
chart_895822aabe8348e29fd75a82a4655684.setOption(option_895822aabe8348e29fd75a82a4655684);