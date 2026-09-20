const app = document.querySelector('#app');
const state = {
	query: '',
	region: 'all',
	page: 1
};
const perPage = 8;
const regionLabels = {
	all: 'Tất cả vùng miền',
	'mien-bac': 'Miền Bắc',
	'mien-trung': 'Miền Trung',
	'mien-nam': 'Miền Nam'
};

function normalizeText(text) {
	return String(text)
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLocaleLowerCase('vi');
}

function escapeHtml(value) {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}
function card(item) {
	return `<article class="card"><img class="card-image" src="${item.image}" alt="${item.name}" loading="lazy"><div class="card-body"><div class="tags"><span>${item.regionName}</span><span class="rating">★ ${item.rating}</span></div><h3>${item.name}</h3><p>${item.description}</p><a href="#/mon/${item.id}">Khám phá món ăn →</a></div></article>`;
}

function filters() {
	return `<div class="filters"><button class="filter ${state.region === 'all' ? 'active' : ''}" data-region="all">Tất cả vùng miền</button><button class="filter ${state.region === 'mien-bac' ? 'active' : ''}" data-region="mien-bac">Miền Bắc</button><button class="filter ${state.region === 'mien-trung' ? 'active' : ''}" data-region="mien-trung">Miền Trung</button><button class="filter ${state.region === 'mien-nam' ? 'active' : ''}" data-region="mien-nam">Miền Nam</button></div>`;
}

function results(items, title = 'Khám phá đặc sản') {
	const pages = Math.ceil(items.length / perPage);
	const current = Math.min(state.page, pages || 1);
	const part = items.slice((current - 1) * perPage, current * perPage);

	return `<section class="content"><div class="section-heading"><div><p class="muted">${items.length} hương vị được tìm thấy</p><h2>${title}</h2></div></div>${filters()}${part.length ? `<div class="cards">${part.map(card).join('')}</div>` : `<div class="empty"><h2>Chưa tìm thấy món ăn phù hợp</h2><p>Hãy thử thay đổi từ khóa hoặc bộ lọc của bạn.</p></div>`}${pages > 1 ? `<div class="pagination">${Array.from({ length: pages }, (_, i) => `<button class="${i + 1 === current ? 'active' : ''}" data-page="${i + 1}">${i + 1}</button>`).join('')}</div>` : ''}</section>`;
}

function home() {
	const q = normalizeText(state.query);
	const items = specialties.filter(x =>
		(state.region === 'all' || x.region === state.region) &&
		(!q || normalizeText(`${x.name} ${x.place} ${x.regionName} ${x.description}`).includes(q))
	);

	app.innerHTML = `<section class="hero"><div class="hero-content"><span class="eyebrow">Ẩm thực Việt Nam</span><h1>Hương vị quê nhà,<br>gói trọn ba miền.</h1><p>Khám phá những món ngon trứ danh, nơi mỗi hương vị đều kể một câu chuyện về vùng đất Việt Nam.</p><form class="search-box" id="searchForm"><input id="searchInput" value="${escapeHtml(state.query)}" placeholder="Tìm món ăn, địa danh..." aria-label="Tìm kiếm đặc sản"><button type="submit">Tìm kiếm</button></form></div></section>${results(items)}`;
	bindList();
}

function regionPage(region) {
	state.region = region;
	state.page = 1;
	app.innerHTML = `<section class="region-hero"><div class="inner"><span class="eyebrow" style="background:var(--teal)">${regionLabels[region]}</span><h1>Hương vị ${regionLabels[region]}</h1><p class="muted">Những món ngon mang bản sắc riêng của từng vùng đất.</p></div></section>${results(specialties.filter(x => x.region === region), `Đặc sản ${regionLabels[region]}`)}`;
	bindList();
}

function detail(id) {
	const x = specialties.find(item => item.id === id);

	if (!x) {
		app.innerHTML = '<div class="empty"><h2>Không tìm thấy món ăn</h2><a class="back" href="#/">← Về trang chủ</a></div>';
		return;
	}

	app.innerHTML = `<section class="detail"><a class="back" href="#/">← Trở về khám phá</a><div class="detail-grid"><img class="detail-image" src="${x.image}" alt="${x.name}"><div><div class="tags"><span>${x.regionName} · ${x.place}</span><span class="rating">★ ${x.rating}</span></div><h1>${x.name}</h1><p class="lead">${x.description}</p><h2>Câu chuyện món ăn</h2><p class="lead">${x.story}</p><h2>Nguyên liệu nổi bật</h2><ul>${x.ingredients.map(i => `<li>${i}</li>`).join('')}</ul></div></div></section>`;
}

function bindList() {
	document.querySelector('#searchForm')?.addEventListener('submit', e => {
		e.preventDefault();
		state.query = document.querySelector('#searchInput').value.trim();
		state.page = 1;
		home();
	});

	document.querySelectorAll('[data-region]').forEach(b => b.onclick = () => {
		state.region = b.dataset.region;
		state.page = 1;
		home();
	});

	document.querySelectorAll('[data-page]').forEach(b => b.onclick = () => {
		state.page = +b.dataset.page;
		home();
		window.scrollTo({ top: 430, behavior: 'smooth' });
	});
}

function router() {
	const route = location.hash.slice(2) || '';

	document.querySelectorAll('[data-nav]').forEach(a =>
		a.classList.toggle('active', a.getAttribute('href') === location.hash)
	);
	if (route.startsWith('mon/')) {
		detail(route.slice(4));
	} else if (['mien-bac', 'mien-trung', 'mien-nam'].includes(route)) {
		regionPage(route);
	} else {
		state.query = '';
		state.region = 'all';
		state.page = 1;
		home();
	}

	app.focus();
}

window.addEventListener('hashchange', router);
router();
