// styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 10,
    },
    appBar: {
        backgroundColor: 'transparent',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: -11,
        marginTop: 20,
        position: 'relative', 
        zIndex: 1,
    },
    appBarTitle: {
        color: '#735641', 
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
    },
    locationName: {
        fontSize: 16,
        marginRight: 5,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: '#735641',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdown: {
        backgroundColor: '#735641',
        padding: 10,
        borderRadius: 5,
    },
    dropdownItem: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    spacer: {
        height: 22,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#E6E6E6',
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 50,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
    },
    filterButton: {
        marginLeft: 10,
       
        borderRadius: 5,
        padding: 10,
    },
    card: {
        backgroundColor: '#502516',
        borderRadius: 20,
        padding: 16,
        marginBottom: 20,
        margin: 10,
        shadowColor: 'red',
        shadowOffset: { width: 9, height: 9 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        width: '90%',
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#fff',
        marginVertical: 5,
    },
    shopButton: {
        backgroundColor: '#735641',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    shopButtonText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    cardImage: {
        width: 120,
        height: 160,
        
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#888',
        marginHorizontal: 4,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    categoryContainer: {
        flexDirection: 'row',
    },
    categoryItem: {
        alignItems: 'center',
        marginRight: 15,
    },
    categoryImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 5,
    },
    flashSaleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    flashSaleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    countdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countdownText: {
        marginRight: 5,
    },
    countdownTimer: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    filterContainer: {
        flexDirection: 'row',
    },
    filterText: {
        marginRight: 15,
    },
    filterButtonSmall: {
        backgroundColor: '#000',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    filterButtonTextSmall: {
        color: '#fff',
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    imageContainer: {
        flex: 1,
        marginRight: 5,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    priceTag: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: '#000',
        color: '#fff',
        padding: 5,
        borderRadius: 5,
    },
    imageText: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 14,
        color: '#888',
    },
    menu: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },
    menuItem: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },


    tabBar: {
        backgroundColor: '#e0e0e0',
        borderTopWidth: 0,
        height: 60,
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 6.27,
        elevation: 10,
    },
    iconContainer: {
        backgroundColor: '#e0e0e0',
        borderRadius: 50,
        shadowOffset: { width: -6, height: -6 },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#ffffff',
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
    },
    tabBar: {
        backgroundColor: '#E0E0E0',
        borderRadius: 20,
        marginHorizontal: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: -6,
            height: -6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 4,
        shadowColor: '#fff',
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    
});


export default styles;
