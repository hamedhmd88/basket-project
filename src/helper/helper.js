
// اینجا تکست را میگیریم و با متد اسپیلت بر اساس اسپیس کلمات را جدا میکنیم و در داخل یک آرایه قرار میدهد و بعد با متد اسلایس از صفر تا سه آن ایندکس آرایه را به ما نشان بده و با متد جووین و با یک اسپیس فاصله بده
export const shortText = (text) => {
    return text.split(" ").slice(0, 3).join(" ");
};



export const searchProducts = (products, search) => {
    if(!search) return products;
    const searchedProducts = products.filter((p) => p.title.toLowerCase().includes(search));
    return searchedProducts;
};

export const filterProducts = (products, category) => {
    if(!category) return products;
    const filteredProducts = products.filter((product)=> product.category === category);
    return filteredProducts;
};


export const createQueryObject = (currentQuery, newQuery) => {
    if (newQuery.category === "all") {
        const {category, ...rest } = currentQuery; // دوتا آرگومان ورودی کیریت کوئری آبجت یک آبجکت هستن و در اینجا با استفاده از رست اوپریتور میگم از مقدار کارنت کوئری کتگوری را نگه دار و بقیه را در آبجکت رست بریز و در پایین میگی غیر از آل در در بالا تعریف کردیم بقیه مقادیر که در رست هست را ریترن کن
        return rest;
    }
    else if (newQuery.search === "") {
        const {search, ...rest } = currentQuery;
        return rest;
    }

    else {
        return {...currentQuery, ...newQuery}
    }
};


// این فانکشن برای اینه که صفحه ری لود شد مقادیر سرج شده و انتخاب شده باقی بماند
export const getQueryParams = (searchParams) => {
    const query = {};
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    
    if (category) query.category = category;
    if (search) query.search = search;
    return query;
};

// فانکشن برای جکع آیتم ها و قیمت های محصولات
export const sumProducts = (products) => {
    const itemsCounter = products.reduce((counter, product) => counter + product.quantity, 0); // برای جمع تعداد آیتم ها
    const total = products.reduce((total, product) => total + product.price * product.quantity , 0 ).toFixed(2); //  برای جمع  کردن قیمتهای آیتم های انتخابی و پرایس ضربدر کوانتیتی برای زمانی است که یک کالا چنتا ازش انتخاب میشود و ضربدر تعداد آن میکنیم

 return {
    itemsCounter,
    total
 }

};


// یک فانکشن برای تعین مقادیر آیتم ها با استفاده از آیدی آن محصول 

export const productQuantity = (state, id) => {
    const index = state.selectedItems.findIndex((item) => item.id == id);
    if(index === -1) {
        return 0;
    } else {
        return state.selectedItems[index].quantity;
    };

};