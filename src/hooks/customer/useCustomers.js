import { useState, useEffect, useCallback } from "react";
import { message } from "antd";
import { customersService } from "../../services/customersService";

export const useCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");

    const fetchCustomers = useCallback(async () => {
        try {
            setLoading(true);
            const response = await customersService.list();
            setCustomers(response.data || []);
        } catch (err) {
            message.error("Failed to fetch customers.");
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCustomers();
    }, [fetchCustomers]);

    const filteredCustomers = customers.filter((customer) =>
        customer.customer_name?.toLowerCase().includes(searchText.toLowerCase()) ||
        customer.address?.includes(searchText) ||
        customer.contacts?.toLowerCase().includes(searchText.toLowerCase())
    );
    const totalCustomers = customers.length;
    const activeCustomers = customers.filter(c => c.status !== 'inactive').length;
    return { customers,
         loading, 
         searchText, 
         setSearchText, 
         filteredCustomers,
         fetchCustomers,
         totalCustomers,
         activeCustomers };


}