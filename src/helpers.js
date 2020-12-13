export function deleteChildren(node)
{
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
}