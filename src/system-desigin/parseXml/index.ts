// xml节点类
class XMLNode {
  tag: string;
  children: XMLNode[] | string;
  props?: Record<string, string>;
  constructor(tag: string = "") {
    this.tag = tag;
  }

  stringify() {
    return JSON.stringify(this);
  }
}

// 栈
class Stack extends Array {
  top() {
    return this[this.length - 1];
  }
  empty() {
    return this.length === 0;
  }
}

export function parseXml(xml: string): XMLNode {
  const regTag = /(?:<(\/?)(\w+)([^>]*)>)|(\w+)/g;
  const regProp = /(\w+)=["']([\w-]*)["']/g;
  let res = null;
  let root: XMLNode = null;
  const stack = new Stack(); // 申请一个栈用来保存节点
  // 通过正则表达式遍历字符串
  while ((res = regTag.exec(xml))) {
    const [target, endFlag, tag, props, txt] = res;
    if (tag && !endFlag) {
      // 开始标签

      // 创建一个新节点
      const node = new XMLNode(tag);
      if (props) {
        // 解析属性值
        let temp = null;
        while ((temp = regProp.exec(props))) {
          const [_, key, val] = temp;
          if (!node.props) {
            node.props = {};
          }
          node.props[key] = val;
        }
      }

      if (!stack.empty()) {
        // 取出栈顶元素，将当前元素加入到栈顶元素的children上
        const parent = stack.top();
        if (parent.children == null) {
          // 如果child为null，初始化为空数组
          parent.children = [];
        } else if (typeof parent.children === "string") {
          // 如果children是string，修改为数组
          parent.children = [parent.children];
        }
        parent.children.push(node);
      }
      // 将当前节点推入栈中
      stack.push(node);
    } else if (tag && endFlag) {
      // 结束标签
      // 判断当前队尾元素的tag是否和结束标签的tag一致
      const tail = stack.top();
      if (tail.tag === tag) {
        // 当前元素解析完毕，弹出栈
        root = stack.pop();
      }
    } else if (txt) {
      // 文本
      if (!stack.empty()) {
        // 当前栈非空
        const parent = stack.top();
        if (parent.children == null) {
          parent.children = txt;
        } else if (Array.isArray(parent.children)) {
          parent.children.push("txt");
        }
      }
    } else {
      // 不明类似，没有匹配到tag标签或者txt文本
      console.log("unknow target", target);
    }
  }

  // 返回根节点
  return root;
}
