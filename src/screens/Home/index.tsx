import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PatientCard from '../../components/PatientCard'
import PatientModal from '../../components/PatientModal'
import PatientSearch from '../../components/PatientSearch'
import FilterModal from '../../components/FilterModal'
import { RootState } from '../../store'
import { filterPatientList, getPatients, updatePage } from '../../store/patient.store'
import { Container, LoadMore, LoadMoreText, NotFoundText } from './styles'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { COLORS } from '../../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
    const dispatch = useDispatch()

    const [query, setQuery] = useState<string>('')

    const patient = useSelector((state: RootState) => state.patient)
    const { filter } = useSelector((state: RootState) => state.filter)
    
    useEffect(() => {
        dispatch(filterPatientList(query))
    }, [query])

    useEffect(() => {
        dispatch(getPatients({gender: filter.gender, nationality: filter.nationality.join(), itemsPerRequest: filter.itemsPerRequest}))
    }, [dispatch, patient.page])

    const notFoundMessage: boolean = !patient.list.length && !!query

    const handleLoadMore = () => {
        dispatch(updatePage())
    }

    const renderFooter = () => {
        return (
            patient.loading ?
            <LoadMore>
                <ActivityIndicator size="small" color={COLORS.secondaryOrange}/>
                <LoadMoreText>Loading more...</LoadMoreText>
            </LoadMore> : null
        )
    }

    return (
        <>
        { notFoundMessage && <NotFoundText>{ `No results were found for "${query}"` }</NotFoundText> }
        <FlatList
            ListHeaderComponent={<PatientSearch value={query} onChangeText={(t: string) => setQuery(t)} />}
            data={patient.list}
            renderItem={({item}) => (
                <PatientCard key={item.login.uuid} patient={item} />
            )}
            keyExtractor={item => item.login.uuid}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={renderFooter}
        />

        <PatientModal />
        <FilterModal />
        </>
    )
}

export default Home
