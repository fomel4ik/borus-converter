<script lang="ts">

</script>


<h1>Для лаб</h1>


<section id="table">
    <table>
	<caption>Продажи за квартал</caption>

	<thead>
		<tr>
			<th scope="col">Товар</th>
			<th scope="col">Кол-во</th>
			<th scope="col">Цена</th>
		</tr>
	</thead>

	<tbody>
		<tr>
			<th scope="row">Яблоки</th>
			<td>10</td>
			<td>50 ₽</td>
		</tr>
		<tr>
			<th scope="row">Груши</th>
			<td>5</td>
			<td>80 ₽</td>
		</tr>
		<tr>
			<th scope="row">Сливы</th>
			<td>8</td>
			<td>60 ₽</td>
		</tr>
	</tbody>

	<tfoot>
		<tr>
			<th scope="row">Итого</th>
			<td>23</td>
			<td>1 380 ₽</td>
		</tr>
	</tfoot>
    </table>
</section>

<section id="form">
    <form action="/feedback" method="post">
	<h2>Обратная связь</h2>

	<p>
		<label for="fb-name">Имя</label>
		<input
			type="text"
			id="fb-name"
			name="name"
			autocomplete="name"
			placeholder="Как к вам обращаться"
		>
	</p>

	<p>
		<label for="fb-email">Email <span aria-hidden="true">*</span></label>
		<input
			type="email"
			id="fb-email"
			name="email"
			autocomplete="email"
			required
			aria-required="true"
			placeholder="you@example.com"
		>
	</p>

	<p>
		<label for="fb-topic">Тема</label>
		<select id="fb-topic" name="topic">
			<option value="">— выберите —</option>
			<option value="bug">Баг</option>
			<option value="idea">Идея</option>
			<option value="other">Другое</option>
		</select>
	</p>

	<p>
		<label for="fb-message">Сообщение</label>
		<textarea
			id="fb-message"
			name="message"
			rows="5"
			placeholder="Опишите подробнее…"
		></textarea>
	</p>

	<button type="submit">Отправить</button>
    </form>
</section>
