class HuffmanNode {
    constructor(ch, frequency, left, right) {
        this.ch = ch; // char
        this.frequency = frequency;
        this.left = left;
        this.right = right;
    }
}

class HuffmanCoding {
    getCode(input) {
        let freqMap = this.buildFrequencyMap(input);
        let nodeQueue = this.sortByFrequence(freqMap);
        this.root = this.buildTree(nodeQueue);
        let codeMap = this.createHuffmanCode(this.root);
        return codeMap;
    }

    buildFrequencyMap(input) {
        let map = new Map();
        for (let i = 0; i < input.length; i++) {
            let ch = input.charAt(i);
            if (!map.has(ch)) {
                map.set(ch, 1);
            } else {
                let val = map.get(ch);
                map.set(ch, ++val);
            }
        }
        return map;
    }

    sortByFrequence(map) {
        let queue = [];
        for (let entry of map.entries())
            queue.push(new HuffmanNode(entry[0], entry[1], null, null));
        queue.sort((a, b) => a.frequency - b.frequency)
        return queue;
    }

    buildTree(nodeQueue) {
        while (nodeQueue.length > 1) {
            let node1 = nodeQueue.shift();
            let node2 = nodeQueue.shift();
            let node = new HuffmanNode('', node1.frequency + node2.frequency, node1, node2);
            nodeQueue.push(node);
        }
        return nodeQueue.shift();
    }

    // Create Huffman code map by preorder of the tree
    createHuffmanCode(node) {
        let map = new Map();
        this.createCodeRec(node, map, "");
        return map;
    }

    //Preorder of the tree using recursion
    createCodeRec(node, map, s) {
        if (node.left == null && node.right == null) {
            map.set(node.ch, s);
            return;
        }
        this.createCodeRec(node.left, map, s + '0');
        this.createCodeRec(node.right, map, s + '1');
    }

    encode(codeMap, input) {
        let s = ""
        for (let i = 0; i < input.length; i++) {
            s += codeMap.get(input.charAt(i));
        }
        return s;
    }

    decode(coded) {
        let s = ""
        let curr = this.root;
        for (let i = 0; i < coded.length; i++) {
            curr = coded.charAt(i) == '1' ? curr.right : curr.left;
            if (curr.left == null && curr.right == null) {
                s += curr.ch;
                curr = this.root;
            }
        }
        return s;
    }
}

let input=  "AAAAAABBCCDDEEFFFFF"
let huffman = new HuffmanCoding();
let codeMap = huffman.getCode(input);
console.log(codeMap);
let encoded = huffman.encode(codeMap, input);
console.log("encoding string: " + encoded);
let decode = huffman.decode(encoded);
console.log("decoding string: " + decode);