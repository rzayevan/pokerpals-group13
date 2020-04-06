module.exports =  {

    getImage(name){
        let image = this.imageFiles.find(image => image.name === name);
        if(image === undefined){
            return this.imageFiles.find(image => image.name === 'not_found');
        }
        else{
            return image;
        }
    },

    imageFiles: [ // each image resource is loaded into an array and elements can request them by either index or name
        {src: require(`./other/cheat_sheet_icon.png`), name: 'cheat_sheet_icon'},
        {src: require(`./other/cheat_sheet.png`), name: 'cheat_sheet'},
        {src: require(`./other/chip.png`), name: 'chip'},
        {src: require(`./other/clock_pointer.png`), name: 'clock_pointer'},
        {src: require(`./other/clock.png`), name: 'clock'},
        {src: require(`./other/dealer_icon.png`), name: 'dealer_icon'},
        {src: require(`./other/exit_symbol.png`), name: 'exit_symbol'},
        {src: require(`./other/logo_card.png`), name: 'logo_card'},
        {src: require(`./other/logo_word.png`), name: 'logo_word'},
        {src: require(`./other/not_found.png`), name: 'not_found'},
        {src: require(`./other/table.png`), name: 'table'},

        {src: require(`./icons/camel.png`), name: 'player_icon_1'},
        {src: require(`./icons/cat.png`), name: 'player_icon_2'},
        {src: require(`./icons/cow.png`), name: 'player_icon_3'},
        {src: require(`./icons/crocodile.png`), name: 'player_icon_4'},
        {src: require(`./icons/deer.png`), name: 'player_icon_5'},
        {src: require(`./icons/dog.png`), name: 'player_icon_6'},
        {src: require(`./icons/elephant.png`), name: 'player_icon_7'},
        {src: require(`./icons/giraffe.png`), name: 'player_icon_8'},
        {src: require(`./icons/goat.png`), name: 'player_icon_9'},
        {src: require(`./icons/hippo.png`), name: 'player_icon_10'},
        {src: require(`./icons/horse.png`), name: 'player_icon_11'},
        {src: require(`./icons/kangaroo.png`), name: 'player_icon_12'},
        {src: require(`./icons/lion.png`), name: 'player_icon_13'},
        {src: require(`./icons/pig.png`), name: 'player_icon_14'},
        {src: require(`./icons/sheep.png`), name: 'player_icon_15'},
        {src: require(`./icons/zebra.png`), name: 'player_icon_16'},

        {src: require(`./cards/card_back.png`), name: 'card_back'},
        {src: require(`./cards/empty.png`), name: 'card_empty'},
        {src: require(`./cards/invisible.png`), name: 'invisible'},

        {src: require(`./cards/A_S.png`), name: 'A_S'},
        {src: require(`./cards/2_S.png`), name: '2_S'},
        {src: require(`./cards/3_S.png`), name: '3_S'},
        {src: require(`./cards/4_S.png`), name: '4_S'},
        {src: require(`./cards/5_S.png`), name: '5_S'},
        {src: require(`./cards/6_S.png`), name: '6_S'},
        {src: require(`./cards/7_S.png`), name: '7_S'},
        {src: require(`./cards/8_S.png`), name: '8_S'},
        {src: require(`./cards/9_S.png`), name: '9_S'},
        {src: require(`./cards/10_S.png`), name: '10_S'},
        {src: require(`./cards/J_S.png`), name: 'J_S'},
        {src: require(`./cards/Q_S.png`), name: 'Q_S'},
        {src: require(`./cards/K_S.png`), name: 'K_S'},
        
        {src: require(`./cards/A_C.png`), name: 'A_C'},
        {src: require(`./cards/2_C.png`), name: '2_C'},
        {src: require(`./cards/3_C.png`), name: '3_C'},
        {src: require(`./cards/4_C.png`), name: '4_C'},
        {src: require(`./cards/5_C.png`), name: '5_C'},
        {src: require(`./cards/6_C.png`), name: '6_C'},
        {src: require(`./cards/7_C.png`), name: '7_C'},
        {src: require(`./cards/8_C.png`), name: '8_C'},
        {src: require(`./cards/9_C.png`), name: '9_C'},
        {src: require(`./cards/10_C.png`), name: '10_C'},
        {src: require(`./cards/J_C.png`), name: 'J_C'},
        {src: require(`./cards/Q_C.png`), name: 'Q_C'},
        {src: require(`./cards/K_C.png`), name: 'K_C'},

        {src: require(`./cards/A_H.png`), name: 'A_H'},
        {src: require(`./cards/2_H.png`), name: '2_H'},
        {src: require(`./cards/3_H.png`), name: '3_H'},
        {src: require(`./cards/4_H.png`), name: '4_H'},
        {src: require(`./cards/5_H.png`), name: '5_H'},
        {src: require(`./cards/6_H.png`), name: '6_H'},
        {src: require(`./cards/7_H.png`), name: '7_H'},
        {src: require(`./cards/8_H.png`), name: '8_H'},
        {src: require(`./cards/9_H.png`), name: '9_H'},
        {src: require(`./cards/10_H.png`), name: '10_H'},
        {src: require(`./cards/J_H.png`), name: 'J_H'},
        {src: require(`./cards/Q_H.png`), name: 'Q_H'},
        {src: require(`./cards/K_H.png`), name: 'K_H'},

        {src: require(`./cards/A_D.png`), name: 'A_D'},
        {src: require(`./cards/2_D.png`), name: '2_D'},
        {src: require(`./cards/3_D.png`), name: '3_D'},
        {src: require(`./cards/4_D.png`), name: '4_D'},
        {src: require(`./cards/5_D.png`), name: '5_D'},
        {src: require(`./cards/6_D.png`), name: '6_D'},
        {src: require(`./cards/7_D.png`), name: '7_D'},
        {src: require(`./cards/8_D.png`), name: '8_D'},
        {src: require(`./cards/9_D.png`), name: '9_D'},
        {src: require(`./cards/10_D.png`), name: '10_D'},
        {src: require(`./cards/J_D.png`), name: 'J_D'},
        {src: require(`./cards/Q_D.png`), name: 'Q_D'},
        {src: require(`./cards/K_D.png`), name: 'K_D'},
    ]
};