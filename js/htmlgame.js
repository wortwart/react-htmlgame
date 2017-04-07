'use strict';
var debug = false;

var data = [
	{
		name: 'Wurzelelement',
		elements: [{name: 'html', role: 'root element'}]
	}, {
		name: 'Metadaten',
		elements: [{name: 'head', role: 'document metadata container'}, {name: 'title', role: 'document title'}, {name: 'base', role: 'base URL'}, {name: 'link', role: 'inter-document relationship metadata'}, {name: 'meta', role: 'metadata'}, {name: 'style', role: 'style (presentation) information'}]
	}, {
		name: 'Abschnitte',
		elements: [{name: 'body', role: 'document body'}, {name: 'article', role: 'article'}, {name: 'section', role: 'section'}, {name: 'nav', role: 'group of navigational links'}, {name: 'aside', role: 'tangential content'}, {name: 'h1', role: 'heading'}, {name: 'h2', role: 'heading'}, {name: 'h3', role: 'heading'}, {name: 'h4', role: 'heading'}, {name: 'h5', role: 'heading'}, {name: 'h6', role: 'heading'}, {name: 'header', role: 'header'}, {name: 'footer', role: 'footer'}, {name: 'address', role: 'contact information'}]
	}, {
		name: 'Inhaltsgruppierung',
		elements: [{name: 'p', role: 'paragraph'}, {name: 'hr', role: 'thematic break'}, {name: 'pre', role: 'preformatted text'}, {name: 'blockquote', role: 'block quotation'}, {name: 'ol', role: 'ordered list'}, {name: 'ul', role: 'unordered list'}, {name: 'li', role: 'list item'}, {name: 'dl', role: 'description list'}, {name: 'dt', role: 'term or name'}, {name: 'dd', role: 'description or value'}, {name: 'figure', role: 'figure with optional caption'}, {name: 'figcaption', role: 'figure caption'}, {name: 'div', role: 'generic flow container'}, {name: 'main', role: 'main content'}]
	}, {
		name: 'Textsemantik',
		elements: [{name: 'a', role: 'hyperlink'}, {name: 'em', role: 'emphatic stress'}, {name: 'strong', role: 'strong importance'}, {name: 'small', role: 'small print'}, {name: 's', role: 'struck text'}, {name: 'cite', role: 'cited title of a work'}, {name: 'q', role: 'quoted text'}, {name: 'dfn', role: 'defining instance'}, {name: 'abbr', role: 'abbreviation'}, {name: 'data', role: 'machine-readable contents'}, {name: 'time', role: 'date and/or time'}, {name: 'code', role: 'code fragment'}, {name: 'var', role: 'variable or placeholder text'}, {name: 'samp', role: '(sample) output'}, {name: 'kbd', role: 'user input'}, {name: 'sub', role: 'subscript'}, {name: 'sup', role: 'superscript'}, {name: 'i', role: 'offset text conventionally styled in italic'}, {name: 'b', role: 'offset text conventionally styled in bold'}, {name: 'u', role: 'offset text conventionally styled with an underline'}, {name: 'mark', role: 'marked (highlighted) text'}, {name: 'ruby', role: 'ruby annotation'}, {name: 'rb', role: 'ruby base text'}, {name: 'rtc', role: 'ruby text container'}, {name: 'rt', role: 'ruby text'}, {name: 'rp', role: 'ruby parenthesis'}, {name: 'bdi', role: 'BiDi isolate'}, {name: 'bdo', role: 'BiDi override'}, {name: 'span', role: 'generic span'}, {name: 'br', role: 'line break'}, {name: 'wbr', role: 'line-break opportunity'}]
	}, {
		name: 'Bearbeitung',
		elements: [{name: 'ins', role: 'inserted text'}, {name: 'del', role: 'deleted text'}]
	}, {
		name: 'Eingebettete Inhalte',
		elements: [{name: 'img', role: 'image'}, {name: 'iframe', role: 'nested browsing context (inline frame)'}, {name: 'embed', role: 'integration point for plugins'}, {name: 'object', role: 'generic external content'}, {name: 'param', role: 'initialization parameters for plugins'}, {name: 'video', role: 'video'}, {name: 'audio', role: 'audio stream'}, {name: 'source', role: 'media source'}, {name: 'track', role: 'supplementary media track'}, {name: 'map', role: 'image-map definition'}, {name: 'area', role: 'image-map hyperlink'}, {name: 'math', role: 'MathML container'}, {name: 'svg', role: 'SVG container'}]
	}, {
		name: 'Tabellendaten',
		elements: [{name: 'table', role: 'table'}, {name: 'caption', role: 'table title'}, {name: 'colgroup', role: 'table column group'}, {name: 'col', role: 'table column'}, {name: 'tbody', role: 'table row group'}, {name: 'thead', role: 'table heading group'}, {name: 'tfoot', role: 'table footer row group'}, {name: 'tr', role: 'table row'}, {name: 'td', role: 'table cell'}, {name: 'th', role: 'table header cell'}]
	}, {
		name: 'Formulare',
		elements: [{name: 'form', role: 'user-submittable form'}, {name: 'label', role: 'caption for a form control'}, {name: 'input', role: 'input control'}, {name: 'button', role: 'button'}, {name: 'select', role: 'option-selection form control'}, {name: 'datalist', role: 'predefined options for other controls'}, {name: 'optgroup', role: 'group of options'}, {name: 'option', role: 'option'}, {name: 'textarea', role: 'text input area'}, {name: 'keygen', role: 'key-pair generator/input control'}, {name: 'output', role: 'result of a calculation in a form'}, {name: 'progress', role: 'progress indicator'}, {name: 'meter', role: 'scalar gauge'}, {name: 'fieldset', role: 'set of related form controls'}, {name: 'legend', role: 'title or explanatory caption'}]
	}, {
		name: 'Skripte',
		elements: [{name: 'script', role: 'embedded script'}, {name: 'noscript', role: 'fallback content for script'}, {name: 'template', role: 'fragments of HTML to be cloned and inserted'}, {name: 'canvas', role: 'canvas for dynamic graphics'}]
	}, {
		name: 'Experimentell',
		value: 'bonus',
		elements: [{name: 'hgroup', role: 'heading group'}, {name: 'details', role: 'control for additional on-demand information'}, {name: 'summary', role: 'summary, caption, or legend for details'}, {name: 'menu', role: 'list of commands'}, {name: 'menuitem', role: ''}, {name: 'picture', role: ''}, {name: 'command', role: 'command'}, {name: 'dialog', role: ''}, {name: 'shadow', role: ''}, {name: 'content', role: ''}]
	}, {
		name: 'Veraltet',
		value: 'malus',
		elements: [{name: 'applet', role: 'Use embed or object instead'}, {name: 'acronym', role: 'Use abbr instead'}, {name: 'bgsound', role: 'Use audio instead'}, {name: 'dir', role: 'Use ul instead'}, {name: 'frame', role: 'Use iframe and CSS or server-side includes'}, {name: 'frameset', role: 'Use iframe and CSS or server-side includes'}, {name: 'noframes', role: 'Use iframe and CSS or server-side includes'}, {name: 'isindex', role: 'Use an explicit form and text field combination instead'}, {name: 'listing', role: 'Use pre and code instead'}, {name: 'nextid', role: 'Use GUIDs instead'}, {name: 'noembed', role: 'Use object instead of embed when fallback is necessary'}, {name: 'plaintext', role: 'Use the "text/plain" MIME type instead'}, {name: 'strike', role: 'Use del if the element is marking an edit, otherwise use s'}, {name: 'xmp', role: 'Use pre and code instead'}, {name: 'basefont', role: 'Use appropriate elements or CSS instead'}, {name: 'big', role: 'Use h1, strong or mark'}, {name: 'blink', role: 'Use appropriate elements or CSS instead'}, {name: 'center', role: 'Use appropriate elements or CSS instead'}, {name: 'font', role: 'Use appropriate elements or CSS instead'}, {name: 'marquee', role: 'Use appropriate elements or CSS instead'}, {name: 'multicol', role: 'Use appropriate elements or CSS instead'}, {name: 'nobr', role: 'Use appropriate elements or CSS instead'}, {name: 'spacer', role: 'Use appropriate elements or CSS instead'}, {name: 'tt', role: 'Use kbd, var, code or samp element'}]
	}
];

var els = {},
    experimental = {},
    deprecated = {},
    timeSeconds = 360,
    stopAfter;
for (var i = 0; i < data.length; i++) {
	if (data[i].value === 'bonus') data[i].elements.map(function (el) {
		experimental[el.name] = false;
	});else if (data[i].value === 'malus') data[i].elements.map(function (el) {
		deprecated[el.name] = false;
	});else data[i].elements.map(function (el) {
		els[el.name] = false;
	});
	stopAfter = debug ? 2 : Object.keys(els).length; // debug
}

var Game = React.createClass({
	displayName: 'Game',

	getInitialState: function getInitialState() {
		return {
			input: '',
			els: [],
			deprecated: [],
			experimental: [],
			seconds: timeSeconds,
			timer: 'off',
			result: {}
		};
	},

	timer: function timer() {
		var _this = this;

		var start = 0,
		    frequence = 350,
		    time = 0,
		    diff = 0,
		    passedSeconds = 0;
		var timerInstance = function timerInstance() {
			if (_this.state.timer === 'out') return;
			time += frequence;
			diff = new Date().getTime() - start - time;
			passedSeconds = Math.round(Math.floor(time / 1000));
			_this.setState({ seconds: timeSeconds - passedSeconds });
			if (passedSeconds >= timeSeconds) {
				_this.setState({
					seconds: 0,
					timer: 'out'
				});
				return;
			}
			setTimeout(timerInstance, frequence - diff);
		};
		start = new Date().getTime();
		setTimeout(timerInstance, frequence);
	},

	handleInput: function handleInput(ev) {
		var _this2 = this;

		if (this.state.timer === 'off') {
			this.state.timer = 'on';
			this.timer();
		}
		var input = ev.target.value;
		this.setState({ input: input}, function () {
			if (els[input] !== undefined) {
				if (els[input] === false) {
					els[input] = true;
					_this2.setState({ input: '' });
					_this2.setState(function (myState) {
						els: myState.els.push(input);
					});
				}
			} else if (deprecated[input] !== undefined) {
				if (deprecated[input] === false) {
					deprecated[input] = true;
					_this2.setState({ input: '' });
					_this2.setState(function (myState) {
						deprecated: myState.deprecated.push(input);
					});
				}
			} else if (experimental[input] !== undefined) {
				if (experimental[input] === false) {
					experimental[input] = true;
					_this2.setState({ input: '' });
					_this2.setState(function (myState) {
						experimental: myState.experimental.push(input);
					});
				}
			}
		});
	},

	componentDidUpdate: function componentDidUpdate() {

		if (Object.keys(this.state.result).length) return;
		if (this.state.els.length === stopAfter) this.gameOver();
		if (this.state.timer !== 'out') return;
		this.gameOver();
	},

	gameOver: function gameOver() {
		this.setState({
			timer: 'out',
			result: {
				els: this.state.els,
				exp: this.state.experimental,
				dep: this.state.deprecated
			}
		});
		console.info('Game over');
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Counter, { done: this.state.els.length }),
			React.createElement(Input, { val: this.state.input, process: this.handleInput, disabled: this.state.timer === 'out' ? true : false }),
			React.createElement(Timer, { time: this.state.seconds, status: this.state.timer }),
			React.createElement(
				Output,
				{ color: 'green', desc: 'HTML5-Elemente'},
				this.state.els
			),
			React.createElement(
				Output,
				{ color: 'blue', desc: 'Experimentell'},
				this.state.experimental
			),
			React.createElement(
				Output,
				{ color: 'red', desc: 'Veraltet'},
				this.state.deprecated
			),
			React.createElement(Report, { result: this.state.result, timeRest: this.state.seconds })
		);
	}
});

var Counter = React.createClass({
	displayName: 'Counter',

	getInitialState: function getInitialState() {
		return {
			todo: Object.keys(els).length
		};
	},
	render: function render() {
		return React.createElement(
			'div',
			{ id: 'counter'},
			this.props.done,
			' von ',
			this.state.todo
		);
	}
});

var Timer = React.createClass({
	displayName: 'Timer',

	render: function render() {
		var seconds = this.props.time % 60;
		var minutes = (this.props.time - seconds) / 60;
		seconds = seconds < 10 ? '0' + seconds : seconds.toString();
		return React.createElement(
			'div',
			{ id: 'timer', className: this.props.status},
			minutes,
			':',
			seconds
		);
	}
});

var Input = React.createClass({
	displayName: 'Input',

	render: function render() {
		return React.createElement('input', { type: 'text', value: this.props.val, autoFocus: 'true', disabled: this.props.disabled, onInput: this.props.process });
	}
});

var Output = React.createClass({
	displayName: 'Output',

	render: function render() {
		if (this.props.children.length) {
			return React.createElement(
				'div',
				{ className: this.props.color},
				this.props.desc,
				': ',
				this.props.children.sort().join(', ')
			);
		} else {
			return React.createElement('br', null);
		}
	}
});

var Report = React.createClass({
	displayName: 'Report',

	render: function render() {
		var _this3 = this;

		if (!Object.keys(this.props.result).length) return null;
		var score = this.props.result.els.length + Math.floor((this.props.result.exp.length - this.props.result.dep.length) / 2) + this.props.timeRest;
		var missing = [];
		for (var i = 0; i < data.length; i++) {
			var tmp1 = [],
			    tmp2 = [];
			if (data[i].value) continue;
			data[i].elements.forEach(function (el) {
				if (_this3.props.result.els.indexOf(el.name) < 0) tmp1.push(el);else tmp2.push(el);
			});
			missing.push({
				name: [data[i].name],
				total: data[i].elements.length,
				missing: tmp1,
				found: tmp2
			});
		}
		return React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				React.createElement(
					'strong',
					null,
					this.props.result.els.length,
					' reguläre HTML5-Elemente, ',
					this.props.result.exp.length,
					' experimentelle und ',
					this.props.result.dep.length,
					' veraltete Elemente in ',
					timeSeconds - this.props.timeRest,
					' Sekunden'
				)
			),
			React.createElement(
				'h3',
				null,
				'Ergebnis: ',
				score,
				' Punkte'
			),
			React.createElement(
				'ul',
				null,
				missing.map(function (obj, i) {
					return React.createElement(ReportRow, { key: i, data: obj });
				})
			)
		);
	}
});

var ReportRow = React.createClass({
	displayName: 'ReportRow',

	render: function render() {
		var _this4 = this;

		return React.createElement(
			'li',
			null,
			React.createElement(
				'b',
				null,
				this.props.data.name,
				': '
			),
			this.props.data.found.length,
			' von ',
			this.props.data.total,
			'. Gefunden:',
			(function () {
				if (_this4.props.data.found.length) return React.createElement(
					'ul',
					{ className: 'elementlist'},
					_this4.props.data.found.map(function (el, i) {
						return React.createElement(ReportTag, { key: i, tag: el.name, comment: el.role, style: 'found' });
					})
				);else return ' Leider keine! ';
			})(),
			'Es fehlen:',
			(function () {
				if (_this4.props.data.missing.length) return React.createElement(
					'ul',
					{ className: 'elementlist'},
					_this4.props.data.missing.map(function (el, i) {
						return React.createElement(ReportTag, { key: i, tag: el.name, comment: el.role, style: 'missed' });
					})
				);else return ' Keine – toll!';
			})()
		);
	}
});

var ReportTag = React.createClass({
	displayName: 'ReportTag',

	render: function render() {
		return React.createElement(
			'li',
			null,
			React.createElement(
				'code',
				{ className: this.props.style, title: this.props.comment},
				this.props.tag
			)
		);
	}
});

React.render(React.createElement(Game, null), document.getElementsByTagName('main')[0]);