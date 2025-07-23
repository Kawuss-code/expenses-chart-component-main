fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        const days = ["mon","tue","wed","thu","fri","sat","sun"];
        let cost = [];
        let biggest = 0;
        for(let i = 0; i < data.length; i++) {
            cost.push(Math.round(data[i].amount));
            let element = document.getElementById(days[i]);
            element.style.height = `${cost[i]*2.5}px`;
            if(cost[i] > biggest) {
                biggest = cost[i];
            }
        }
        let blueId;
        for(let i = 0; i < cost.length; i++) {
            if(cost[i] == biggest) {
                blueId = i;
            }
        }
        document.getElementById(days[blueId]).style.backgroundColor = "hsl(186, 34%, 65%)";
    });