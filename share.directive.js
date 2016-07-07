"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CeiboShare = (function () {
    function CeiboShare() {
        this.sharers = {
            facebook: {
                shareUrl: 'https://www.facebook.com/sharer/sharer.php'
            },
            googleplus: {
                shareUrl: 'https://plus.google.com/share'
            },
            linkedin: {
                shareUrl: 'https://www.linkedin.com/shareArticle'
            },
            twitter: {
                shareUrl: 'https://twitter.com/intent/tweet/'
            },
            email: {
                //shareUrl: 'mailto:' + this.to,
                /*params: {
                    subject: this.subject,
                    body: this.title + '\n' + this.url
                },*/
                isLink: true
            },
            whatsapp: {
                shareUrl: 'whatsapp://send',
                /*params: {
                    text: this.title + ' ' + this.url
                },*/
                isLink: true
            },
            telegram: {
                shareUrl: 'tg://msg_url',
                /*params: {
                    text: this.title + ' ' + this.url
                },*/
                isLink: true
            },
            viber: {
                shareUrl: 'viber://forward',
                /*params: {
                    text: this.title + ' ' + this.url
                },*/
                isLink: true
            },
            line: {
                //shareUrl: 'http://line.me/R/msg/text/?' + encodeURIComponent(this.title + ' ' + this.url),
                isLink: true
            },
            pinterest: {
                shareUrl: 'https://www.pinterest.com/pin/create/button/'
            },
            tumblr: {
                shareUrl: 'http://tumblr.com/widgets/share/tool'
            },
            hackernews: {
                shareUrl: 'https://news.ycombinator.com/submitlink'
            },
            reddit: {
                shareUrl: 'https://www.reddit.com/submit'
            },
            vk: {
                shareUrl: 'http://vk.com/share.php'
            },
            xing: {
                shareUrl: 'https://www.xing.com/app/user'
            },
            buffer: {
                shareUrl: 'https://buffer.com/add'
            },
            instapaper: {
                shareUrl: 'http://www.instapaper.com/edit'
            },
            pocket: {
                shareUrl: 'https://getpocket.com/save'
            },
            digg: {
                shareUrl: 'http://www.digg.com/submit'
            },
            stumbleupon: {
                shareUrl: 'http://www.stumbleupon.com/submit'
            },
            flipboard: {
                shareUrl: 'https://share.flipboard.com/bookmarklet/popout'
            },
            /*weibo: {
                shareUrl: 'http://service.weibo.com/share/share.php',
                params: {
                    url: this.url,
                    title: this.title,
                    pic: this.image,
                    appkey: this.getValue('appkey'),
                    ralateUid: this.getValue('ralateuid'),
                    language: 'zh_cn'
                }
            },*/
            renren: {
                shareUrl: 'http://share.renren.com/share/buttonshare'
            },
            myspace: {
                shareUrl: 'https://myspace.com/post'
            },
            blogger: {
                shareUrl: 'https://www.blogger.com/blog-this.g'
            },
            baidu: {
                shareUrl: 'http://cang.baidu.com/do/add'
            },
            douban: {
                shareUrl: 'https://www.douban.com/share/service'
            },
            okru: {
                shareUrl: 'https://connect.ok.ru/dk'
            }
        };
    }
    CeiboShare.prototype.urlSharer = function (sharer) {
        var p = sharer.params || {}, keys = Object.keys(p), i, str = keys.length > 0 ? '?' : '';
        for (i = 0; i < keys.length; i++) {
            if (str !== '?') {
                str += '&';
            }
            if (p[keys[i]]) {
                str += keys[i] + '=' + encodeURIComponent(p[keys[i]]);
            }
        }
        sharer.shareUrl += str;
        if (!sharer.isLink) {
            var popWidth = sharer.width || 600, popHeight = sharer.height || 480, left = window.innerWidth / 2 - popWidth / 2 + window.screenX, top = window.innerHeight / 2 - popHeight / 2 + window.screenY, popParams = 'scrollbars=no, width=' + popWidth + ', height=' + popHeight + ', top=' + top + ', left=' + left, newWindow = window.open(sharer.shareUrl, '', popParams);
            if (window.focus) {
                newWindow.focus();
            }
        }
        else {
            window.location.href = sharer.shareUrl;
        }
    };
    CeiboShare.prototype.getSharer = function () {
        var _sharer;
        if (this.facebook) {
            _sharer = this.sharers['facebook'];
            _sharer.params = this.facebook;
        }
        if (this.googlePlus) {
            _sharer = this.sharers['googleplus'];
            _sharer.params = this.googlePlus;
        }
        if (this.twitter) {
            _sharer = this.sharers['twitter'];
            _sharer.params = this.twitter;
        }
        if (this.pinterest) {
            _sharer = this.sharers['pinterest'];
            _sharer.params = this.pinterest;
        }
        return _sharer;
    };
    CeiboShare.prototype.share = function () {
        var s = this.getSharer();
        // custom popups sizes
        if (s) {
            s.width = this.shareWidth;
            s.height = this.shareHeight;
        }
        return s !== undefined ? this.urlSharer(s) : false;
    };
    __decorate([
        core_1.Input()
    ], CeiboShare.prototype, "facebook");
    __decorate([
        core_1.Input()
    ], CeiboShare.prototype, "twitter");
    __decorate([
        core_1.Input()
    ], CeiboShare.prototype, "googlePlus");
    __decorate([
        core_1.Input()
    ], CeiboShare.prototype, "pinterest");
    __decorate([
        core_1.Input()
    ], CeiboShare.prototype, "shareWidth");
    __decorate([
        core_1.Input()
    ], CeiboShare.prototype, "shareHeight");
    __decorate([
        core_1.HostListener('click')
    ], CeiboShare.prototype, "share");
    CeiboShare = __decorate([
        core_1.Directive({
            selector: '[ceiboShare]'
        })
    ], CeiboShare);
    return CeiboShare;
}());
exports.CeiboShare = CeiboShare;
