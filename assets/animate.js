class animateNumber {
    status = 0;
    settings = {
        time: 1000,
        parentSelector: '#keshi',
        event:'load'
    };
     
    options = {};
    constructor(option) {
        this.options = (Object.assign(this.settings, option));
     
        window.addEventListener(this.settings.event, () => {
            
            if (this.Comparison() && this.status === 0) {
                this.status = 1;
                this.counter();
            }
        })
    }
    Comparison = () => {
        var offsetTop = document.querySelectorAll(this.settings.parentSelector)[0].offsetTop;
        if (((offsetTop - window.innerHeight) - 50) < window.pageYOffset) {

            return true

        }
    };

    counter() {
        var ali;
        var timeout = Math.floor(this.settings.time / 250);
        document.querySelectorAll(this.settings.parentSelector + " " + '[data-count]').forEach((item) => {
            let t = setInterval(() => {
                if (Number(item.innerHTML.match(/[0-9]+/i)[0]) === Number(item.getAttribute('data-count'))) {
                    clearInterval(t);
                    return true;
                }
                ali = item.innerHTML.match(/[0-9]+/i)[0];
                ali = Number(ali) + 1;
                item.innerHTML = item.innerHTML.replace(/[0-9]+/g, ali);
            }, 100 / Number(item.getAttribute('data-count')) * timeout)
        });
    }
};

