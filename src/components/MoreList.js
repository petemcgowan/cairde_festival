import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Linking,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons/faNewspaper'
import { faLeaf } from '@fortawesome/free-solid-svg-icons/faLeaf'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import { faHandshake } from '@fortawesome/free-solid-svg-icons/faHandshake'
import { faDollar } from '@fortawesome/free-solid-svg-icons/faDollar'
import { faDonate } from '@fortawesome/free-solid-svg-icons/faDonate'
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook'
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons/faCircleDollarToSlot'

// left side of non-link items
// info icon (FAQ AND "General Information")
// news icon (Media)
//  an eco or leaf symbol (Sustainability)
//  Dollar!  (Principle Funders)
//  Handshake (Partners)
//  a person's head or "team of people" (Festival team)
//  ()

const { width } = Dimensions.get('window')
const offWhite = '#e2d8c6'

export const Separator = () => <View style={styles.separator} />
const generalStyleData = [
    {
        id: '1',
        name: 'FAQ',
        title: 'FAQ',
        description: 'FAQDescription',
        component: null,
        link: null,
        linkTree: false,
        icon: faInfo,
        qaList: [
            {
                id: 'Q1',
                question: 'Where can I find more information about tickets?',
                answer: `Please visit our <How to Book>TODO LINK page for all information regarding purchasing and collecting tickets. `,
            },
            {
                id: 'Q2',
                question: 'Where can I purchase bus tickets?',
                answer: `Bus Éireann’s Expressway is delighted to be official travel partner for All Together Now again in 2022. Regular services will be available from Waterford Bus Station to Curraghmore House each day from Friday 29th July to Monday 1st August. In addition to this, direct non-stop services from Dublin and Cork city centres will operate to the festival on Friday 29th July with return journeys on Monday 1st August. Bus tickets for all services will go on sale in June and early bird discounts will apply.

        Bus tickets available here - https://www.expressway.ie/service-news/all-together-now-2022`,
            },
            {
                id: 'Q3',
                question: 'Do you have any free events?',
                answer: `The Festival is proud to offer many events free of charge. This includes all street spectacles and visual art galleries. Free events are noted in the Festival programme.`,
            },
            {
                id: 'Q4',
                question: 'Do you have any family-friendly events?',
                answer: `Cairde includes various family-friendly offerings from year to year in genres ranging from street spectacle to visual arts and from theatre to First Thought Talks. Please refer to our Family Friendly page for more information.`,
            },
            {
                id: 'Q5',
                question:
                    'Do I need a COVID vaccine / recovery pass or antigen test?',
                answer: `Covid-19 passes and antigen testing do not apply to outdoor events in Republic of Ireland.`,
            },
            {
                id: 'Q6',
                question: 'I have a ticket query. Who should I contact?',
                answer: `Please contact Ticketmaster directly on 0818 903 001 or via the ‘Help Chat’ tab on www.ticketmaster.ie and they will be happy to advise you. `,
            },
            {
                id: 'Q7',
                question:
                    'How do I know if this show is appropriate for my children?',
                answer: `Some Cairde shows may be unsuitable for young children. Visit the show’s event page on our website to learn more, or refer to the official programme. `,
            },
            {
                id: 'Q8',
                question: 'Can tickets be refunded or exchanged?',
                answer: `We regret that 2022 tickets cannot be exchanged or refunded after purchase.

        Only buy your tickets from authorized outlets only; do not seek to gain admission using a counterfeit ticket.

        -

        For customers who purchased tickets for  ATN 2020 or 2021 online, refunds are available for those unable to attend the new dates in 2022.

        If you are no longer able to attend the new dates, please log into ‘My Account’ on Ticketmaster.ie for fan support. Need help -https://help.ticketmaster.ie/hc/en-ie/articles/360019542978-How-to-Contact-us

        If you purchased your 2020 / 2021 ticket from a Ticketmaster physical outlet and are unable to attend the new dates, please email us at hello@alltogethernow.ie    `,
            },
            {
                id: 'Q9',
                question: 'Are all venues fully accessible?',
                answer: `The majority of Cairde venues are fully accessible, however a few do have limited access. Please visit our Accessibility page to learn more.`,
            },
            {
                id: 'Q10',
                question:
                    'I know this show is sold out, but surely there’s room for one more?',
                answer: `If a show has sold out, unfortunately that means that the venue is at capacity and there are no more tickets available.`,
            },
            {
                id: 'Q11',
                question:
                    'Where can I submit my work for consideration in the Festival?',
                answer: `The deadline for Festival submissions is usually at the end of the previous calendar year. Please check our Take Part page for updates.`,
            },
            {
                id: 'Q12',
                question:
                    'Where can I buy Festival merchandise and gift vouchers?',
                answer: `Official merchandise is available for purchase during the Festival at the Festival Hub (Market Street) and at select shows, as well as on our <online merchandise store> TODO LINK. Gift vouchers <are available here in €25, €50, €100 and €250 increments.> TODO LINK`,
            },
        ],
    },
    {
        id: '2',
        name: 'Media',
        title: 'Travel',
        description: ``,
        component: null,
        link: null,
        linkTree: true,
        icon: faNewspaper,
        qaList: [
            {
                id: 'M1',
                question:
                    ' Irish Independent: Packed Programme For Sligos Cairde Arts Festival',
                answer: `https://www.independent.ie/regionals/sligochampion/news/packed-programme-for-sligos-cairde-arts-festival-2022-41769951.html`,
            },
            {
                id: 'M2',
                question:
                    ' Irish Independent: Cairde Sligo Arts Festival Is In Full Swing With Entertainment For All Ages',
                answer: ` https://www.independent.ie/regionals/sligochampion/news/cairde-sligo-arts-festival-is-in-full-swing-with-entertainment-for-all-ages-41816377.html`,
            },
            {
                id: 'M3',
                question: 'Sligo Weekender: Cairde Close Party',
                answer: `http://sligoweekender.ie/2016/07/06/cairde-close-party/`,
            },
            {
                id: 'M4',
                question:
                    'Tripadvisor: Cairde Sligo Arts Festival Starts This Weekend',
                answer: `https://www.tripadvisor.ie/ShowTopic-g186635-i1128-k14009631-Cairde_Sligo_Arts_Festival_starts_this_weekend-Sligo_County_Sligo_Western_Ireland.html`,
            },
            {
                id: 'M5',
                question:
                    'Sligo Weekender: Cairde Line up Hits all the Right Notes',
                answer: `http://sligoweekender.ie/2016/06/22/cairde-sligo-arts-festival-music-line-up-hits-all-the-right-notes/`,
            },
            {
                id: 'M6',
                question:
                    'Irish Independent: Experiences and Fun for all Ages at Cairde',
                answer: `https://www.independent.ie/regionals/sligochampion/news/experiences-and-fun-for-all-ages-at-cairde-arts-festival-41740270.html`,
            },
            {
                id: 'M7',
                question:
                    'Irish Independent: Siomha and Nava link-up in Rich Double Bill At Cairde',
                answer: `https://www.independent.ie/regionals/sligochampion/news/siomha-and-nava-link-up-in-rich-double-bill-at-cairde-fest-41798536.html`,
            },
            {
                id: 'M8',
                question: 'RTE: Cairde: Culture, Connection and Craic',
                answer: ` https://www.rte.ie/culture/2022/0627/1306334-cairde-sligo-arts-festival-culture-connection-and-craic/`,
            },
            {
                id: 'M9',
                question:
                    'Irish Independent: Countdown is on as Cairde starts this weekend',
                answer: `https://www.independent.ie/regionals/sligochampion/news/countdown-is-on-as-cairde-sligo-arts-festival-starts-this-weekend-41794722.html`,
            },
            {
                id: 'M10',
                question:
                    'Irish Independent: New Artistic Works for Cairde Arts Fest',
                answer: `https://www.independent.ie/regionals/sligochampion/news/new-artistic-works-for-cairde-arts-fest-41740157.html`,
            },
            // {
            //     question:
            //         'Writing Ireland: Cairde Sligo Arts Festival Returns 1-10-July',
            //     answer: `https://www.writing.ie/guest-blogs/cairde-sligo-arts-festival-returns-as-a-fully-live-event-1-10-july/`,
            // },
        ],
    },
    {
        id: '3',
        name: 'Sustainability',
        title: 'Sustainability',
        description: `SustainabilityDescription`,
        component: null,
        link: null,
        linkTree: false,
        icon: faLeaf,
        qaList: [
            {
                id: 'S1',
                question: 'Sustainability Policy',
                answer: `When we launched All Together Now in 2018, we wanted to take the opportunity to create a sustainable and environmentally friendly festival where we could set our own standards. With sustainability at the core of our ethos, we are passionate about creating and promoting the message as best we can.

        We are firm believers in making as much effort on our part to leave as small a footprint as possible, of both the carbon and physical nature, on our festival site. We recognise our responsibility and duty of care we have, to not only the global environment, but to the Curraghmore House the stunning venue we are lucky to call home. We operate a Leave No Trace policy to ensure we leave the beautiful estate as we found it and safe for the local wildlife.

        We are committed to reducing our waste on site and are actively exploring ways we can introduce renewable energy solutions and improve on responsible consumption and production throughout. We endeavour to do our best, but there is always more we can do. To help us in our effort towards becoming a more sustainable festival, we’ve put together some ways you can help us reduce our impact on the land together.

        We can’t wait to welcome you back to the gorgeous Curraghmore Estate this year – thank you for your support. `,
            },
            {
                id: 'S2',
                question: 'What You Can Do',
                answer: `{'\u2022'}Carpool or use Public Transport – How are you travelling to the festival? Can you carpool or take public transport?

        {'\u2022'}#LEAVENOTRACE – Whatever you bring in, please take it out. Bring your tent and camping equipment home. If it can’t be brought home, please dispose of it correctly in the appropriate waste bins. We ask that you please leave your camping spot as you found it.

        {'\u2022'}Sort your campsite waste – Bring your own bins bags and separate your campsite waste as you go. Once your bag is full, you can dispose of it in the correct recycling bins provided.

        {'\u2022'}Don’t own a tent? - Opt in for one of our pre-pitched camping options, from general campsites to boutique living, we’ve got loads to choose from!

        {'\u2022'}Bring your reusable water bottle – We’ve got water stations in the campsites and arena where you can refill your water bottle for free!

        {'\u2022'}Use the bins correctly – Our bins will be signposted, so we please ask you to think before you throw out. If you see waste on the ground, lead by example by picking it up.

        {'\u2022'}No IF’S & (Cigarette) BUTTS – Please do your best to consider the local flora and fauna and don’t drop your cigarette butts on the ground. They can leach toxic chemicals into the soil and local water supplies, so please use the bins provided.

        {'\u2022'}Use the toilets provided – please don’t urinate on the ground.



        Reduce the amount you bring and pack responsibly– Try to avoid bringing single-use plastic items. Bring a reusable water bottle and coffee cup. Use bio-degradable wet wipes and glitter (if you must). Create fun festival outfits from clothes you already have in your wardrobe. Get creative!

        Love the land, respect your neighbours, and have fun!  `,
            },
            {
                id: 'S3',
                question: 'What We Are Doing',
                answer: `{'\u2022'}Water – This year we are installing more free water drinking stations throughout the festival in the campsites, arenas and backstage. We highly encourage you and our staff to bring your own reusable water bottle to the festival.

        {'\u2022'}Single-Use Plastic Bottles - We are doing our best to minimise the use of single-use plastics on-site. Single-use plastic bottles will not be available for sale at any of our vendors or bars. No single-use plastic bottles are provided in any backstage area either. Instead, we offer a canned water & soft drinks alternative, or the option to refill at our free water stations.

        {'\u2022'}Compostable Serveware – We strictly enforce that all food vendors and bars only use fully compostable serveware. This includes coffee & pint cups, plates, utensils etc. This policy has been in place since our inaugural event in 2018.

        {'\u2022'}Food Vendors - Most of our food venders offer a vegan & vegetarian option. Check out our food line-up closer to the festival to see who’s on-site.

        {'\u2022'}Fuel Consumption & Energy Monitoring – We are auditing our energy usage onsite this year in collaboration with sustainability consultants, Native Events. Results will allow for us to plan more efficiently and reduce our consumption in coming years.

        {'\u2022'}Waste Management – Our festival is zero waste to landfill. Our bins are clearly signposted, helping our audiences and staff to separate their waste correctly, to ensure maximum recycling and recovery downstream. We are working on reducing the festival’s outputs as much as possible and to do so, are conducting an audit of our waste outputs this year.

        {'\u2022'}Public Transport - We partner with Bus Eireann to reduce the traffic volume and encourage the use of public transport. Bus Eireann will be providing return bus services from Dublin, Cork and Waterford. Bus Eireann are also providing a shuttle service from their Waterford Bus terminal, across the road from Waterford Plunkett Station. Those wishing to travel via Irish Rail can do so using this service. Bus times and tickets will be available at a later date. If public transport isn’t an option for you, we highly encourage carpooling. `,
            },
        ],
    },
    {
        id: '4',
        name: 'Partners',
        title: 'Partners',
        description: `PartnersDescription`,
        component: 'Partners',
        link: null,
        linkTree: false,
        icon: faHandshake,
        qaList: [],
    },
    {
        id: '5',
        name: 'Principle Funders',
        title: 'Principle Funders',
        description: `PrincipleFundersDescription`,
        component: 'PrincipleFunders',
        icon: faDollar,
        link: null,
        linkTree: false,
        qaList: [],
    },
    {
        id: '6',
        name: 'Festival Team',
        title: 'Festival Team',
        description: `Festival TeamDescription`,
        component: 'FestivalTeam',
        icon: faUsers,
        link: null,
        linkTree: false,
        qaList: [],
    },
    {
        id: '7',
        name: 'Book Now',
        title: 'Book Now',
        description: `Book NowDescription`,
        component: null,
        icon: faDonate,
        link: 'https://cairdefestival.ticketsolve.com/shows',
        linkTree: false,
        qaList: [],
    },
    {
        id: '8',
        name: 'Newsletter',
        title: 'Newsletter',
        description: `NewsletterDescription`,
        component: null,
        icon: faNewspaper,
        link: 'https://www.cairdefestival.com/home#newsletter',
        linkTree: false,
        qaList: [],
    },
    {
        id: '9',
        name: 'Donate',
        title: 'Donate',
        description: `DonateDescription`,
        component: null,
        icon: faBook,
        link: 'https://www.idonate.ie/donation_widget/register-donor-anonymous.php?pid=5404',
        linkTree: false,
        qaList: [],
    },
    {
        id: '10',
        name: 'Sponsor Us',
        title: 'Sponsor Us',
        description: `Sponsor UsDescription`,
        component: null,
        icon: faCircleDollarToSlot,
        link: 'https://www.cairdefestival.com/support-us',
        linkTree: false,
        qaList: [],
    },
    {
        id: '11',
        name: 'News',
        title: 'News',
        description: `NewsDescription`,
        component: null,
        icon: faNewspaper,
        link: 'https://www.cairdefestival.com/news',
        linkTree: false,
        qaList: [],
    },
]

const MoreList = ({ navigation }) => {
    useEffect(() => {}, [])

    const onPressLink = async (url) => {
        await Linking.canOpenURL(url)
        Linking.openURL(url)
    }

    const renderItem = ({ item }) => {
        function onPressGeneralItem() {
            if (item.component) {
                navigation.push(item.component, { moreDetails: item })
            } else if (item.link) {
                onPressLink(item.link)
            } else {
                navigation.push('MoreDetails', { moreDetails: item })
            }
        }

        return (
            <View>
                <View style={{ backgroundColor: offWhite }}>
                    <TouchableOpacity
                        onPress={onPressGeneralItem}
                        style={[styles.container, { margin: 10 }]}
                    >
                        <View
                            style={[
                                styles.content,
                                { flexDirection: 'row', alignItems: 'center' },
                            ]}
                        >
                            <View
                                style={{
                                    width: '10%',
                                    margin: 3,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: offWhite,
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    size={24}
                                    color="black"
                                />
                            </View>
                            <Text style={[styles.title, { width: '70%' }]}>
                                {item.name}
                            </Text>
                            <FontAwesomeIcon
                                style={{ width: '20%' }}
                                icon={faChevronRight}
                                size={24}
                                color="orange"
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <Separator />

                <Separator />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: offWhite,
            }}
        >
            <FlatList
                data={generalStyleData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default MoreList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        backgroundColor: offWhite,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        // color: offWhite,
    },
    content: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
        flex: 1,
        // color: offWhite,
    },
    separator: {
        backgroundColor: 'green',
        height: 2,
    },
    right: {
        alignItems: 'flex-end',
        flex: 1,
    },
})
