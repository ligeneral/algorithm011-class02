语言：Java 8

Queue 是一个接口，继承了 Collection 接口，而 Collection 又继承了 Iterable 接口。

PriorityQueue 也是一个接口，继承了 AbstractQueue 类，而 AbstractQueue 继承了 AbstractCollection 类，AbstractCollection 类最终继承了 Collection 接口。

所以 Queue 和 PriorityQueue 本质上都继承了 Collection 接口。

具体来看

Queue 的功能比较少，只有 add(添加元素), offer(判断是否已经有了某个元素), remove(删除元素), poll(删除队首元素，没有返回 null), element(获取队首元素，没有报错), peek(获取队首元素，没有返回 null)






