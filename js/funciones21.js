export const sincronizarListas = (selectPaises, selectCapi) => {
    selectCapi.value = selectPaises.value;
    const paisSelec = selectPaises.options[selectPaises.selectedIndex].text;
    const capiSelec = selectCapi.options[selectCapi.selectedIndex].text;

    console.log(`Pais seleccionado: ${paisSelec} - Capital seleccionada: ${capiSelec}`);
};