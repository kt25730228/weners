// Supabase 연결
const supabase = supabase_js.createClient(
    window.SUPABASE_URL,
    window.SUPABASE_ANON_KEY
);

// 상품 불러오기
async function loadProducts(){
    const container = document.querySelector('#products');
    container.innerHTML = "<p>⏳ 상품 불러오는 중...</p>";

    let { data, error } = await supabase.from("products").select("*");

    if(error){
        container.innerHTML = `<p style="color:red;">❌ 데이터 로딩 실패: ${error.message}</p>`;
        return;
    }

    if(data.length === 0){
        container.innerHTML = "<p>상품이 없습니다.</p>";
        return;
    }

    container.innerHTML = data.map(item => `
        <div class="product-card">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p>시작가 <b>${item.price_start}원</b></p>
            <button onclick="openProduct('${item.id}')">자세히 보기</button>
        </div>
    `).join("");
}

// 상세 페이지 이동
function openProduct(id){
    location.href = `product.html?id=${id}`;
}

// 페이지 시작시 자동 실행
document.addEventListener("DOMContentLoaded", loadProducts);
