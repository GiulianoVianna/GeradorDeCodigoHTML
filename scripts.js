const tagsSelect = document.getElementById('tags');
const generateBtn = document.getElementById('generate');
const output = document.getElementById('output');
const preview = document.getElementById('preview');

const tags = {
    p: "<p>Texto do parágrafo</p>",
    h1: "<h1>Título 1</h1>",
    h2: "<h2>Título 2</h2>",
    div: "<div>Conteúdo da div</div>",
    span: "<span>Texto do span</span>",
    a: "<a href='#'>https://yandex.com/</a>",
    img: "<img src='https://c0.klipartz.com/pngpicture/154/980/gratis-png-woody-woodpecker-ilustracion-woody-woodpecker-enojado-thumbnail.png' alt='Imagem de exemplo'>", 
    ul: "<ul>\n    <li>Item da lista</li>\n</ul>",
    ol: "<ol>\n    <li>Item da lista</li>\n</ol>",
    li: "<li>Item da lista</li>",
    table: "<table style='border-collapse: collapse; margin: 0 auto;'>\n    <tr>\n        <td style='border: 1px solid black; text-align: left;'>Maçã</td>\n        <td style='border: 1px solid black; text-align: left;'>Pera</td>\n    </tr>\n    <tr>\n        <td style='border: 1px solid black; text-align: left;'>Uva</td>\n        <td style='border: 1px solid black; text-align: left;'>Morango</td>\n    </tr>\n    <tr>\n        <td style='border: 1px solid black; text-align: left;'>Abacaxi</td>\n        <td style='border: 1px solid black; text-align: left;'>Melão</td>\n    </tr>\n</table>",
    tr: "<tr>\n    <td>Célula da tabela</td>\n</tr>",
    td: "<td>Célula da tabela</td>",
    th: "<th>Célula de cabeçalho da tabela</th>",
    table: "<table style='border-collapse: collapse;'>\n    <tr>\n        <td style='border: 1px solid black; text-align: left;'>Maçã</td>\n        <td style='border: 1px solid black; text-align: left;'>Pera</td>\n    </tr>\n    <tr>\n        <td style='border: 1px solid black; text-align: left;'>Uva</td>\n        <td style='border: 1px solid black; text-align: left;'>Morango</td>\n    </tr>\n    <tr>\n        <td style='border: 1px solid black; text-align: left;'>Abacaxi</td>\n        <td style='border: 1px solid black; text-align: left;'>Melão</td>\n    </tr>\n</table>",
    tbody: "<tbody>\n    <tr>\n        <td>Célula da tabela</td>\n    </tr>\n</tbody>",
    tfoot: "<tfoot>\n    <tr>\n        <td>Célula da tabela</td>\n    </tr>\n</tfoot>",
    form: "<form></form>",
    input: "<input type='text' name='' id='' placeholder='Texto do campo de entrada'>",
    button: "<button type='submit'>Texto do botão</button>",
    checkbox: "<label for='checkbox1'><input type='checkbox' id='checkbox1' name='checkbox1' value='checkbox1'> Opção 1</label>\n<label for='checkbox2'><input type='checkbox' id='checkbox2' name='checkbox2' value='checkbox2'> Opção 2</label>",
    radio: "<label for='radio1'><input type='radio' id='radio1' name='radio' value='radio1'> Opção 1</label>\n<label for='radio2'><input type='radio' id='radio2' name='radio' value='radio2'> Opção 2</label>",
    combobox: "<select id='combobox'>\n    <option value='option1'>Opção 1</option>\n    <option value='option2'>Opção 2</option>\n</select>",
    
};

const options = Array.from(tagsSelect.options);
options.sort((a, b) => a.text.localeCompare(b.text));
tagsSelect.innerHTML = '';
options.forEach((option) => {
  tagsSelect.add(option);
});

generateBtn.addEventListener('click', () => {
    const selectedTag = tags[tagsSelect.value];
    output.textContent = selectedTag;
    preview.innerHTML = selectedTag;
});
