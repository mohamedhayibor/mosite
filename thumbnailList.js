var Thumbnail = React.createClass({
	render: function () {
		return <div className="thumbnail">
		  <img src= {this.props.imageUrl} alt="...">
		  <div className="caption">
		    <h3> {this.props.title } </h3>
		    <p> {this.props.detail} </p>
		    <p><a href= { this.props.firstButtonUrl } className="btn btn-primary" role="button"> {this.props.firstButonName} </a> <a href= {this.props.secondButtonUrl} className="btn btn-default" role="button"> {this.props.secondButtonName} </a></p>
		  </div>
		</div>
	}
});


var options = {
	items: [
		{
			imageUrl: "http://res.cloudinary.com/masteryoperation/image/upload/v1449454441/conway_mzxxnd.jpg",
			title: "Automata Simulation",
			detail: "Got fascinated by this game from a code retreat organized by the Software Crafmanship group in Boston.",
			firstButtonName: "Play",
			firstButtonUrl: "http://codepen.io/mhayibor/full/dYBdxg/",
			secondButtonName: "Source code",
			secondButtonUrl: "https://github.com/mohamedhayibor/automataSimulation"
		},
		{
			imageUrl: "http://res.cloudinary.com/masteryoperation/image/upload/v1449454441/four_t3jxnx.jpg",
			title: "4 hours principle",
			detail: "I came across the 4 hours principle by reading the Book \"The one thing\" by Gary Keller.",
			firstButtonName: "Play",
			firstButtonUrl: "http://mohamedhayibor.github.io/",
			secondButtonName: "Source code",
			secondButtonUrl: "https://github.com/mohamedhayibor/mohamedhayibor.github.io",
		},
		{
			imageUrl: "http://res.cloudinary.com/masteryoperation/image/upload/v1449454441/future_otoz3p.jpg",
			title: "Motivation Cube",
			detail: "3D cube implementation using css and javascript. Had to have fun with the best motivational quotes.",
			firstButtonName: "Play",
			firstButtonUrl: "http://codepen.io/mhayibor/full/medQaM/",
			secondButtonName: "Source code",
			secondButtonUrl: "https://github.com/mohamedhayibor/motivationCube"
		},
		{
			imageUrl: "http://res.cloudinary.com/masteryoperation/image/upload/v1449454441/buttons_yz8cx9.jpg",
			title: "Simple Buttons",
			detail: "Built the buttons by thinking of an inventory system. Really wanted to get in touch with simplisticity with this one.",
			firstButtonName: "Play",
			firstButtonUrl: "http://codepen.io/mhayibor/full/YyPrKj/",
			secondButtonName: "Source code",
			secondButtonUrl: "https://github.com/mohamedhayibor/justbuttons"
		}
	]
};

var ThumbnailList = React.createClass({

	render: function () {
		var list = this.props.items.map(function (item) {
			return <Thumbnail { ...item } />
		});

		return <div>
			{list}
		</div>
	}
});


var element = React.createElement(ThumbnailList, options);


// finally rendering all dom elements
React.render(element, document.body);