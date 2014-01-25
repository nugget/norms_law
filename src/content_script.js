if (document.body.innerHTML.search('FavoriteFoolUid=10480390&') >= 0) {
	console.log('This is a Norm post, we will adjust...');
	walk(document.body);
} else {
	console.log('Not a Norm post');
}

function walk(node) 
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bNatural Law\b/gi, "NORM'S LAW");

	textNode.nodeValue = v;
}


